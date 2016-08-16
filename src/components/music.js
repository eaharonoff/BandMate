import React, { Component } from 'react';
import { connect } from 'react-redux';


class Music extends Component {
  render() {
    return (
      <div id='user-music'>
      Music Goes Here: {this.props.currentUser.soundcloud_url}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

var SmartMusic = connect(mapStateToProps)(Music)

export default SmartMusic;