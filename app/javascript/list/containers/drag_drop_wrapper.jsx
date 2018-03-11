import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import MainList from './main_list';

class DragDropWrapper extends Component {
  onDragEnd = () => {
    // the only one that is required
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <MainList />
      </DragDropContext>
    );
  }
}

export default DragDropWrapper;
