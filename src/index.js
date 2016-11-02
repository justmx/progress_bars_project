/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import createStore from './redux';
import StartupActions from './redux/StartupRedux';
 import './styles/styles.scss';

const store = createStore(); //Can pass initialState parrameter here
store.dispatch(StartupActions.startup());

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
//Entry point of Redux: Use Provider to Wrap up router
