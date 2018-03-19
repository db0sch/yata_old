import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import MainList from './main_list';
import { updateItemPosition } from '../actions';

class DragDropWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items,
    })
  }

  onDragEnd = (result) => {
    if (result.destination != null) {
      this.persistNewPositionInState(result);
      // this.props.updateItemPosition({
      //   id: result.draggableId,
      //   position: result.destination.index,
      //   dayPart: result.destination.droppableId
      // });
    }
  };

  persistNewPositionInState = (result) => {
    if (result.source.droppableId === result.destination.droppableId) {
      const newStateItems = {...this.state.items}
      const item = newStateItems[result.source.droppableId].find(element => element.id === result.draggableId);
      console.log(newStateItems[result.source.droppableId])
      newStateItems[result.source.droppableId].splice(result.source.index, 1);
      console.log(newStateItems[result.source.droppableId])
      newStateItems[result.source.droppableId].splice(result.destination.index, 0, item);
      this.setState({
        items: {...newStateItems}
      })
    } else if (result.destination && result.source.droppableId != result.destination.droppableId) {
      console.log('CHANGE DAY PART AND POSITION')
    }
    // this.state.items
  }

  render() {
    return (<DragDropContext onDragEnd={this.onDragEnd}> <MainList date={this.props.date} items={this.state.items} /> </DragDropContext>);
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    date: state.date
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateItemPosition }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropWrapper);
