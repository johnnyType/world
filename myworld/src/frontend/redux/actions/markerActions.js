import { UPDATE_MARKER } from '../../constants/actions/markerActions';

export const updateMarkers = (markers) => ({
    type: UPDATE_MARKER,
    payload: {markers}
});