import React, { Component } from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps)(ViewUserProfile)
