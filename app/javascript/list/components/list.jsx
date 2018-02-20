import React from 'react';
import Item from "../containers/item";

function List(props) {
  return (
    <ul className="list-unstyled">
      {props.items.map((item) => {
        return (
          <li key={item.id}>
            <Item item={item} />
          </li>
          );
      })}
    </ul>
  );
}

export default List;
