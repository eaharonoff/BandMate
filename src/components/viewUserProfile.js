import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Profile from './profile'

class ViewUserProfile extends Component {
  render() {
    return (
      <div className='user-profile'>
       <Profile data={this.props.currentlyViewing} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentlyViewing: state.currentlyViewing}
}

var SmartViewUserProfile = connect(mapStateToProps)(ViewUserProfile)
export default SmartViewUserProfile
