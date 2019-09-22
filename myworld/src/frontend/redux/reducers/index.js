import { combineReducers } from 'redux';

import country from './countryReducer';
import marker from './markerReducer';

export default combineReducers({country,marker});