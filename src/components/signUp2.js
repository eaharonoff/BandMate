import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import editUser from '../actions/editUser';
import axios from 'axios'

class SignUp2 extends Component {

  handleSubmit(event){
    event.preventDefault()
    var formChildren = event.target.children
    var genre = formChildren[0].value
    var instrument = formChildren[1].value
    this.props.editUser({genre, instrument})
    var user = Object.assign({}, this.props.currentUser, {genre}, {instrument})
    axios({method: 'post', url: 'http://localhost:3000/users', data: user})
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
        Genre: <input type='text' placeholder='genre' />
        Instrument: <input type='text' placeholder='instrument'/>
        <input type='submit'></input>
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
