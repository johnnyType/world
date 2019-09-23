import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Graticule,
  // Markers,
  // Marker
} from "react-simple-maps";
import { connect } from "react-redux";

import { selectCountry } from "../redux/actions/countryActions";

const countries = require("i18n-iso-countries");
const countriesJSON = require("i18n-iso-countries/langs/zh.json");

const wrapperStyles = {
  width: "100%",
  maxWidth: 1000,
  margin: 0,
}
// const MyMarker = () => {
//   return (
//     <Markers>
//         {markers.map((marker, i) => (
//             <Marker
//                 key={i}
//                 marker={marker}
//                 style={{
//                     default: { stroke: "#455A64" },
//                     hover: { stroke: "#FF5722" },
//                     pressed: { stroke: "#FF5722" },
//                 }}
//             >
//                 <g transform="translate(-12, -24)">
//                     <path
//                         fill="none"
//                         strokeWidth="2"
//                         strokeLinecap="square"
//                         strokeMiterlimit="10"
//                         strokeLinejoin="miter"
//                         d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
//                     />
//                     <circle
//                         fill="none"
//                         strokeWidth="2"
//                         strokeLinecap="square"
//                         strokeMiterlimit="10"
//                         strokeLinejoin="miter"
//                         cx="12"
//                         cy="9"
//                         r="3"
//                     />
//                 </g>
//                 <text
//                     textAnchor="middle"
//                     y={marker.markerOffset}
//                     style={{
//                         fontFamily: "Roboto, sans-serif",
//                         fill: "#607D8B",
//                         stroke: "none",
//                     }}
//                 >
//                     {marker.name}
//                 </text>
//             </Marker>
//         ))}
//     </Markers>
//   );
// }
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