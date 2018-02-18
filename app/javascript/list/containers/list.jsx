import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchItems } from '../actions';
import Item from "./item";

class List extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <ul className="list-unstyled">
        {this.props.items.map((item) => {
          return (
            <li key={item.id}>
              <Item item={item} />
            </li>
            );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchItems }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
