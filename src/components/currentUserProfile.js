import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Profile from './profile'

class CurrentUserProfile extends Component {
  render() {
    return (
      <div id='user-profile'>
       <Profile data={this.props.currentUser} />
       <Link to='/profile/edit'>Edit Profile</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(CurrentUserProfile)
