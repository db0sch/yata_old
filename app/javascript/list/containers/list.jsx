import React, { Component } from 'react';
import Item from "./item";

class List extends Component {
  render() {
    return (
      <ul className="list-unstyled">
       {/* // ITERATION*/}
        <li>
          {/*// TODO ITEM*/}
          <Item />
        </li>
      </ul>
    );
  }
}

export default List;
