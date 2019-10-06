import { UPDATE_BUBBLE } from '../../constants/actions/bubbleActions';

export const updateBubble = (bubbles) => ({
    type: UPDATE_BUBBLE,
    payload: {bubbles}
});