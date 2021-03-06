import React from 'react';
import {applyMiddleware, createStore} from "redux";
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from "./reducers";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import axios from "axios";

window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(thunk));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
