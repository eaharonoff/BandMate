import React, { Component } from 'react';
import { connect } from 'react-redux';

class Title extends Component {
  render() {
    return (
      <div id='user-title'>
        <h1>{this.props.currentUser.name}, {this.props.currentUser.age}</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

var SmartTitle = connect(mapStateToProps)(Title)

export default SmartTitle;