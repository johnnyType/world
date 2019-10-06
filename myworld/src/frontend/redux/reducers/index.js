import { combineReducers } from 'redux';

import country from './countryReducer';
import marker from './markerReducer';
import bubbleState from './bubbleReducer';

export default combineReducers({country,marker,bubbleState});