import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginUser from '../actions/loginUser';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import axios from 'axios';

class SignIn extends Component {
  handleSubmit(event){
    event.preventDefault()
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var login = {email, password}
    var loginJSON = JSON.stringify(login)
    axios({method: 'post', url: 'http://localhost:3000/users/login', data: loginJSON }).then(response => {
      if (response.data.info) {
        document.getElementById('login-form').innerHTML += '<p>ur wrong</p>'
      } else {
        this.props.loginUser(response.data)
      }
    })
  }
  render(){
    return(
      <div>
        <form id = 'login-form' onSubmit={this.handleSubmit.bind(this)}>
          <label>Email</label>
          <input type='text' placeholder='your email' id='email'/>
          <label>Password</label>
          <input type='password' placeholder='your password' id='password'/>
          <input type='submit' />
        </form>
        <Link to='/signup'> New user? Sign up here </Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loginUser}, dispatch)
}

const SmartSignIn = connect(null, mapDispatchToProps)(SignIn)


export default SmartSignIn;
