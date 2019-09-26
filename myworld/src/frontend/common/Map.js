import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Graticule,
  Markers,
  Marker
} from "react-simple-maps";
import { connect } from "react-redux";
import { scaleLinear } from "d3-scale";

import { selectCountry } from "../redux/actions/countryActions";
import { popularCities } from '../constants/data/bubble';

const countries = require("i18n-iso-countries");
const countriesJSON = require("i18n-iso-countries/langs/zh.json");

const wrapperStyles = {
  width: "100%",
  maxWidth: 1000,
  margin: 0,
}

const cityScale = scaleLinear()
  .domain([0,37843000])
  .range([1,25])

const Bubbles = () => {
  return (
    <Markers>
      {
        popularCities.map((city, i) => (
          <Marker key={i} marker={city}>
            <circle
              cx={0}
              cy={0}
              r={cityScale(2)}
              fill="rgba(255,87,34,0.8)"
              stroke="#607D8B"
              strokeWidth="2"
            />
          </Marker>
        ))
      }
    </Markers>
  );
} 


class BasicMap extends Component {

  handleClick = (e)=> {
    const id = e.id;
    const lang = countries.toAlpha2(id);
    const name = countriesJSON.countries[lang.toUpperCase()];
    this.props.selectCountry({name,id,lang})
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-10,0,0],
          }}
          width={1000}
          height={720}
          style={{
            width: "100%",
            height: "auto",
            marginTop: "-90px",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json">
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  onClick={this.handleClick}
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#607D8B",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
            <Bubbles />
            <Graticule step={[20,8]}/>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  selectCountry: ({id,name,lang})=>dispatch(selectCountry({id,name,lang}))
});

export default connect(null,mapDispatchToProps)(BasicMap);