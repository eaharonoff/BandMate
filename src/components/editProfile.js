import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditProfile extends Component {
  render() {
    return (
      <form id='user-edit-form'>
       <input type='text'/>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(EditProfile)
