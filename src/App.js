import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import deleteUser from './actions/deleteUser'

import './App.css';

class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  removeUser() {
    this.props.deleteUser()
    this.context.router.push('/')
  }
  render() {
    if (this.props.currentUser.id !== undefined) {
      return (
      <div id='app'>
        <div id='navbar'>
          <Link to='/profile'>My Profile</Link>
          <Link to='/search'>Find Musicians</Link>
          <Link to='/conversations'>Conversations</Link>
          <Link to='/requests'>Friend Requests - {this.props.currentUser.received_requests.length}</Link>
          <a href="#" onClick={this.removeUser.bind(this)}>Logout</a>
          {this.props.children}
        </div>
      </div>
    )} else {
      return (
        <div id="navbar">
          <Link to='/signin'>Sign In</Link>
          <Link to='/signup'>Sign up</Link>
          {this.props.children}
        </div>
    )}}
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
