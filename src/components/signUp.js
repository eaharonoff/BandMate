import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addUser from '../actions/addUser';
import { browserHistory } from 'react-router'


class SignUp extends Component {

  handleSubmit(event){
    event.preventDefault()
    var formChildren = event.target.children
    var email = formChildren[0].value
    var password = formChildren[1].value
    var zip = formChildren[2].value
    this.props.addUser({email, password, zip})
    browserHistory.push('/signup2')
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
        Email: <input type='text' placeholder='your email' />
        Password: <input type='password' placeholder='password'/>
        Zip Code: <input type='text' placeholder='your zip'/>
        <input type='submit'></input>
        </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addUser: addUser}, dispatch)
}

const SmartSignUp = connect(null, mapDispatchToProps)(SignUp)


export default SmartSignUp;
