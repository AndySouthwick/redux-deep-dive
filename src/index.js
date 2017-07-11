import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppConnect from './AppConnect';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import store from './store'

const usingConnect = false
const render = (usingConnect) ? <AppConnect /> : <App />

ReactDOM.render(
  <Provider store={store}>
    {render}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
