import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './profile'

class CurrentUserProfile extends Component {
  render() {
    return (
      <div id='user-profile'>
       <Profile data={this.props.currentUser} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(CurrentUserProfile)
