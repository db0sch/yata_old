import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Item from "./item";

class List extends Component {

  shouldComponentUpdate(nextProps: Props) {
    if(this.props.items === nextProps.items) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <ul className="list-unstyled">
        {this.props.items.map((item) => {
          return (
            <Draggable draggableId={`draggable-${item.id}`} index={item.position} key={`draggable-${item.id}`}>
              {(provided, snapshot) => (
                <div>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Item item={item} />
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Draggable>
          )
        })}
      </ul>
    );
  }
}

export default List;
