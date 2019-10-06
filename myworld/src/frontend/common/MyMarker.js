import React from 'react';
import {
    Markers,
    Marker
} from "react-simple-maps";
import { connect } from 'react-redux';

import { updateMarkers } from '../redux/actions/markerActions';
import { markers } from '../constants/data/markers';

class MyMarker extends React.Component {

    componentDidMount() {
        const { updateMarker } = this.props;
        updateMarker(markers);
    }

    render() {
        return (
            markers && markers.length>0 && <Markers {...this.props}>
              {markers.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { stroke: "#455A64" },
                    hover: { stroke: "#FF5722" },
                    pressed: { stroke: "#FF5722" },
                  }}
                  >
                  <g transform="translate(-12, -24)">
                    <path
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                    />
                    <circle
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      cx="12"
                      cy="9"
                      r="3"
                    />
                  </g>
                  <text
                    textAnchor="middle"
                    y={marker.markerOffset}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fill: "#607D8B",
                      stroke: "none",
                    }}
                    >
                    {marker.name}
                  </text>
                </Marker>
              ))}
            </Markers>
        );
    };
}

const mapStateToProps = state => ({
    markers: state.marker
});

const mapDispatchToProps = dispatch => ({
    updateMarker: ()=>dispatch(updateMarkers(markers))
});

export default connect(mapStateToProps,mapDispatchToProps)(MyMarker);