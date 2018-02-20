import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import MainList from './containers/main_list';
import itemsReducer from './reducers/items_reducer';
import dateReducer from './reducers/date_reducer';

const reducers = combineReducers({
  items: itemsReducer,
  date: dateReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

const listContainer = document.getElementById('listContainer');
const date = new Date(listContainer.dataset.date);
console.log(date)
const initialState = { date: date };

if (listContainer) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Provider store={createStore(reducers, initialState, middlewares)}>
        <MainList />
      </Provider>
      , listContainer
    );
  });
}
