import { UPDATE_BUBBLE } from '../../constants/actions/bubbleActions';

const bubbleDefaultState = {
    bubbles: []
};

const bubbleReducer = (state=bubbleDefaultState,action) => {
    const payload = action.payload;
    switch (action.type) {
        case UPDATE_BUBBLE:
            return {bubbles: payload.bubbles};
        default:
            return state;
    }
}

export default bubbleReducer;