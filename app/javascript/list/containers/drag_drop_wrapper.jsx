import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import MainList from './main_list';
import { updateItemPosition } from '../actions';

class DragDropWrapper extends Component {
  onDragEnd = (result) => {
    updateItemPosition({
      id: result.draggableId,
      position: result.destination.index,
      dayPart: result.destination.droppableId
    });
  };

  render() {
    return (<DragDropContext onDragEnd={this.onDragEnd}> <MainList /> </DragDropContext>);
  }
}

export default DragDropWrapper;
