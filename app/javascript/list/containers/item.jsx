import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateItem } from '../actions';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.item.title,
      done: this.props.item.done || false,
      position: this.props.item.position
    };
  }

  handleChangeCheckbox = (e) => {
    const status = e.target.checked;
    this.setState({
      done: status
    });
    this.props.updateItem(this.props.item.id, { done: status });
  }

  renderItemTitle = (status) => {
    if (status) {
      return <p className="text-muted"><del>{this.props.item.title}</del></p>;
    }
    return <p>{this.props.item.title}</p>;
  }

  render() {
    return (
      <div className={`card item-card ${this.state.done ? 'border-light' : ''}`}>
        <div className="card-body item-card-body">
          <div className="item-card-checkbox mr-2">
            <form action="">
              <label htmlFor={`checkboxItem{this.props.item.id}`} hidden>Mark as done</label>
              <input id={`checkboxItem{this.props.item.id}`} type="checkbox" onChange={this.handleChangeCheckbox} checked={this.state.done}/>
            </form>
          </div>
          <div className="item-card-title px-1">
            { this.renderItemTitle(this.state.done) }
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(Item);

