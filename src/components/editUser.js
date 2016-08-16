import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditUser extends Component {
  render() {
    return (
      <form id='user-edit-form'>
      
       <input type='text' />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

var SmartEdit = connect(mapStateToProps)(EditUser)

export default SmartEdit;