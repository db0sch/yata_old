import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import List from './containers/list';

const listContainer = document.getElementById('listContainer');

if (listContainer) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<List />, listContainer);
  });
}
