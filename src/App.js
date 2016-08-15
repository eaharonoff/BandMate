import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
        if(this.props.currentUser){
          return(
          <div id='app'>
            <div id='navbar'>
              <Link to='/profile'>My Profile</Link>
              <Link to='/search'>Find Musicians</Link>
              <Link to='/logout'>Logout</Link>
              {this.props.children}
            </div>
          </div>

        )}
        return(
          <div id="navbar">
            <Link to='/signin'> Sign In</Link>
            <Link to='/signup'>Sign up</Link>
            {this.props.children}
          </div>
        )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

connect(mapStateToProps)(App)
export default App;
