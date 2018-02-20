import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchItems } from '../actions';
import List from '../components/list';

class MainList extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <section id="mainList">
        <article id="morningPart">
          <h4>Morning</h4>
          <List day_part="morning" items={this.props.items.morning} />
        </article>
        <article id="lunchPart">
          <h4>Lunch</h4>
          <List day_part="lunch" items={this.props.items.lunch} />
        </article>
        <article id="afternoonPart">
          <h4>Afternoon</h4>
          <List day_part="afternoon" items={this.props.items.afternoon} />
        </article>
        <article id="eveningPart">
          <h4>Evening</h4>
          <List day_part="evening" items={this.props.items.evening} />
        </article>
      </section>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    items: state.items,
    date: state.date
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchItems }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainList);
