import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="card item-card">
        { /* add "border-light" if task is done*/}
        <div className="card-body item-card-body">
          <div className="item-card-checkbox mr-2">
            {/*TODO CHECKBOX*/}
          </div>
          <div className="item-card-title px-1">
            <p>hello, this is a new task</p>
            {/*if done, del, otherwise, normal*/}
              {/*<p className="text-muted"><del><%= item.title %></del></p>*/}
              {/*<p><%= item.title %></p>*/}
          </div>
          <div className="item-card-controls">
            {/*Controls icon*/}
            {/*btn dropdown to move to today or tomorrow*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
