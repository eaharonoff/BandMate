import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <div id='Profile'>
        <h1> your ugly profile </h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

connect(mapStateToProps)(Profile)

export default Profile;
