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
      <div id='app' className='container'>
        <div className='navbar'>
          <Link to='/profile' className='btn left'>My Profile</Link>
          <Link to='/search' className='btn'>Find Musicians</Link>
          <Link to='/conversations' className='btn'>Conversations</Link>
          <Link to='/requests' className='btn'>Friend Requests - {this.props.currentUser.received_requests.length}</Link>
          <a href="#" className='btn' onClick={this.removeUser.bind(this)} >Logout</a>
        </div>
        {this.props.children}
      </div>
    )} else {
      return (
      <div id='app' className='container'>
        <div className='navbar'>
          <Link to='/signin'>Sign In </Link>
          <Link to='/signup'>Sign up</Link>
        </div>
        <h3> Welcome to Bandmate!</h3>
        <div className='container'>
          <div className='row'>
            {this.props.children}
          </div>
        </div>
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
