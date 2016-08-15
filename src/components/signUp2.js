import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import editUser from '../actions/editUser';
import axios from 'axios'

class SignUp2 extends Component {

  handleSubmit(event){
    event.preventDefault()
    var genreNodes = document.getElementsByClassName('genreCheckbox')
    var genres = []
    for (let i = 0; i < genreNodes.length; i++) {
      if (genreNodes[i].checked) {
        genres.push(genreNodes[i].value)
      }
    }
    var instrumentNodes = document.getElementsByClassName('instrumentCheckbox')
    var instruments = []
    for (let i = 0; i < instrumentNodes.length; i++) {
      if (instrumentNodes[i].checked) {
        instruments.push(instrumentNodes[i].value)
      }
    }
    this.props.editUser({genres, instruments})
    var user = Object.assign({}, this.props.currentUser, {genres: genres.join(' ')}, {instruments: instruments.join(' ')})
    var userJSON = JSON.stringify(user)
    debugger
    axios({method: 'post', url: 'http://localhost:3000/users', data: userJSON})
  }

  render() {
    var genres = ['rock', 'pop']
    var genreCheckboxes = genres.map(genre => {
      return (
        <div>
          <label>{genre}</label><input type="checkbox" className='genreCheckbox' value={genre}/>
        </div>
      )
    })
    var instruments = ['guitar', 'drums']
    var instrumentCheckboxes = instruments.map(instrument => {
      return (
        <div>
          <label>{instrument}</label><input type="checkbox" className='instrumentCheckbox' value={instrument}/>
        </div>
      )
    })
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
        Choose Genres: {genreCheckboxes}
        Choose Instruments: {instrumentCheckboxes}
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
