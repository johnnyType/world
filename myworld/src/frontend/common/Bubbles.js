import React from 'react';
import {
    Markers,
    Marker
} from "react-simple-maps";
import { connect } from 'react-redux';
import { scaleLinear } from "d3-scale";

import { updateBubble } from '../redux/actions/bubbleActions';
import { popularCities } from '../constants/data/bubble';

class Bubbles extends React.Component {

    componentDidMount() {
        console.log(popularCities)
        this.props.updateBubble(popularCities);
    }

    render() {
        const cityScale = scaleLinear()
            .domain([0,37843000])
            .range([1,25])
        const { bubbles } = this.props.bubbles;
        console.log(this.props)
        return (
            <Markers {...this.props}>
            {
              bubbles.map((city, i) => (
                <Marker key={i} marker={city}>
                  <circle
                    cx={0}
                    cy={0}
                    r={cityScale(city.population)}
                    fill="rgba(255,87,34,0.8)"
                    stroke="#607D8B"
                    strokeWidth="2"
                  />
                </Marker>
              ))
            }
          </Markers>
        );
    };
}

const mapStateToProps = state => ({
    bubbles: state.bubbleState
});

const mapDispatchToProps = dispatch => ({
    updateBubble: (bubbles)=>dispatch(updateBubble(bubbles))
});

export default connect(mapStateToProps,mapDispatchToProps)(Bubbles);