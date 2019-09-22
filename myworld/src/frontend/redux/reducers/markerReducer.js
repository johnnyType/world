import { UPDATE_MARKER } from '../../constants/actions/markerActions';

const markerDefaultState = {
    markers: []
};

const markerReducer = (state=markerDefaultState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case UPDATE_MARKER:
            return {
                markers: payload.markers
            };
        default:
            return state;
    }
}

export default markerReducer;