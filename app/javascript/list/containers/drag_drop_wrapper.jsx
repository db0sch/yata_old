import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import MainList from './main_list';
import { updateItemPosition } from '../actions';

class DragDropWrapper extends Component {
  onDragEnd = (result) => {
    this.props.updateItemPosition({
      id: result.draggableId,
      position: result.destination.index,
      dayPart: result.destination.droppableId
    });
  };

  render() {
    return (<DragDropContext onDragEnd={this.onDragEnd}> <MainList /> </DragDropContext>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateItemPosition }, dispatch);
}

export default connect(null, mapDispatchToProps)(DragDropWrapper);
