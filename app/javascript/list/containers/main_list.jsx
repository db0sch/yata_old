import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchItems } from '../actions';
import DroppableList from './droppable_list';

class MainList extends Component {
  componentWillMount() {
    const dateParam = this.props.date.format('YYYY-MM-DD');
    this.props.fetchItems(dateParam);
  }

  render() {
    return (
      <section id="mainList">
        <article id="morningPart">
          <h5>Morning <span className="badge badge-pill badge-dark">{this.props.items.morning.length}</span></h5>
          <DroppableList dayPart="morning" items={this.props.items.morning} />
        </article>
        <hr />
        <article id="lunchPart">
          <h5>Lunch <span className="badge badge-pill badge-dark">{this.props.items.lunch.length}</span></h5>
          <DroppableList dayPart="lunch" items={this.props.items.lunch} />
        </article>
        <hr />
        <article id="afternoonPart">
          <h5>Afternoon <span className="badge badge-pill badge-dark">{this.props.items.afternoon.length}</span></h5>
          <DroppableList dayPart="afternoon" items={this.props.items.afternoon} />
        </article>
        <hr />
        <article id="eveningPart">
          <h5>Evening <span className="badge badge-pill badge-dark">{this.props.items.evening.length}</span></h5>
          <DroppableList dayPart="evening" items={this.props.items.evening} />
        </article>
      </section>
    );
  }
}




function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchItems }, dispatch);
}

export default connect(null, mapDispatchToProps)(MainList);
