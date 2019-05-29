import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebSite from './components'
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import updateState from './reducers'

console.log(updateState);
const store = createStore(updateState)

ReactDOM.render(
  <Provider store={store}>
    <WebSite />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
