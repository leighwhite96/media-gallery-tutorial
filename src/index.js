import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Page from './routes.js'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Page />
    </Router>
  </Provider>,
  document.getElementById('root')
);
