import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import editUser from '../actions/edit_user';
import axios from 'axios'

class SignUp2 extends Component {

  handleSubmit(event){
    event.preventDefault()
    var formChildren = event.target.children
    var genre = formChildren[0].value
    var instrument = formChildren[1].value
    axios.get('http://localhost:3000/users').then(function (response) {
      debugger
      console.log(response);
    });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
        Genre: <input type='text' placeholder='genre' />
        Instrument: <input type='text' placeholder='instrument'/>
        <input type='submit' value='add stuff'></input>
        </form>
    );
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({editUser: editUser}, dispatch)
}

const SmartSignUp2 = connect(mapStateToProps, mapDispatchToProps)(SignUp2)


export default SmartSignUp2;
