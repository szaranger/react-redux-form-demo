import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './containers/UserForm';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { modelReducer, formReducer } from 'react-redux-form';
import store from './store.js';

const reducer = combineReducers({
  user: modelReducer('user'),
  userForm: formReducer('user')
});

ReactDOM.render(
  <Provider store={store}>
    <UserForm />
  </Provider>,
  document.getElementById('root')
);
