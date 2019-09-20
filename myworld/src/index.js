import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MainMap from './frontend/components/MainMap';
import store from './frontend/redux/store';

ReactDOM.render(<Provider store={store}><MainMap /></Provider>, document.getElementById('root'));

