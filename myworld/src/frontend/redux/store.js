import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/index';

const prepareStore = () => {
    return createStore(
        reducer,
        applyMiddleware(thunkMiddleware,logger)
    );
}

const store = prepareStore();

export default store;