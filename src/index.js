/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.js';
// import * as serviceWorker from './serviceWorker';
import { store } from './utils/store';
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// render(
//   <App />,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
