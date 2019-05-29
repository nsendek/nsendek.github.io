import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import updateState from './reducers'

import WebSite from './components'

const store = createStore(updateState)

ReactDOM.render(
  <Provider store={store}>
    <WebSite />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
