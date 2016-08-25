import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateUser from '../actions/updateUser';
import { Link } from 'react-router';
import axios from 'axios';

class SignIn extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  handleSubmit(event){
    event.preventDefault()
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var login = {email, password}
    var loginJSON = JSON.stringify(login)
    axios({method: 'post', url: 'http://localhost:3000/users/login', data:loginJSON }).then(response => {
      if (response.data.info) {
        document.getElementById('errors').innerHTML = '<p>ur wrong</p>'
      } else {
        this.props.updateUser(response.data)
        this.context.router.push('/profile')
      }
    })
  }

  render(){
    return(
      <div className='container'>
        <div id='errors'></div>
        <form className='col-centered' onSubmit={this.handleSubmit.bind(this)}>
          <label >Email</label>
          <input type='text' className='form-control' placeholder='your email' id='email'/><br/>
          <label >Password</label>
          <input type='password' className='form-control' placeholder='your password' id='password'/><br/>
          <input className='btn btn default' type='Submit' value='Sign In'></input>
        </form>
        <center>
          <Link to='/signup'className='signin-link'>New user? Sign up here</Link>
        </center>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateUser}, dispatch)
}

const SmartSignIn = connect(null, mapDispatchToProps)(SignIn)


export default SmartSignIn;
