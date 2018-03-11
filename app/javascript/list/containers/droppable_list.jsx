import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import List from './list';

class DroppableList extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.dayPart}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'tranparent' }}
            {...provided.droppableProps}
          >
            <List items={this.props.items} />
            { provided.placeholder }
          </div>
        )}
      </Droppable>
    );
  }
}

export default DroppableList;
