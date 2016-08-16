import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SmartTitle from './title';
import Details from './details';
import SmartEdit from './editUser';

class Profile extends Component {
  render() {
    return (
      <div id='user-profile'>
       <SmartTitle />
       <Details />
       <Link to='/profile/edit'> Edit profile</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

var SmartProfile = connect(mapStateToProps)(Profile)

export default SmartProfile;
