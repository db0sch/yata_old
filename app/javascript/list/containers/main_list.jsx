import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchItems } from '../actions';
import List from '../components/list';

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
          <List day_part="morning" items={this.props.items.morning} />
        </article>
        <hr/>
        <article id="lunchPart">
          <h5>Lunch <span className="badge badge-pill badge-dark">{this.props.items.lunch.length}</span></h5>
          <List day_part="lunch" items={this.props.items.lunch} />
        </article>
        <hr/>
        <article id="afternoonPart">
          <h5>Afternoon <span className="badge badge-pill badge-dark">{this.props.items.afternoon.length}</span></h5>
          <List day_part="afternoon" items={this.props.items.afternoon} />
        </article>
        <hr/>
        <article id="eveningPart">
          <h5>Evening <span className="badge badge-pill badge-dark">{this.props.items.evening.length}</span></h5>
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
