import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';


import List from './containers/list';
import itemsReducer from './reducers/items_reducer';

const reducers = combineReducers({
  items: itemsReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

const listContainer = document.getElementById('listContainer');

if (listContainer) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Provider store={createStore(reducers, {}, middlewares)}>
        <List />
      </Provider>
      , listContainer
    );
  });
}
