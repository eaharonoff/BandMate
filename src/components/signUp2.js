import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginUser from '../actions/loginUser';
import axios from 'axios'

class SignUp2 extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

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
    var user = Object.assign({}, this.props.currentUser, {genres: genres.join(' ')}, {instruments: instruments.join(' ')})
    var userJSON = JSON.stringify(user)
    axios({method: 'post', url: 'http://localhost:3000/users', data: userJSON}).then(response => {
      this.props.loginUser(response.data)
      this.context.router.push('/profile')
    })
  }

  render() {
    var genres = ['rock', 'pop']
    var genreCheckboxes = genres.map((genre) => {
      return (
        <div>
          <label>{genre}</label><input key={genre} type="checkbox" className='genreCheckbox' value={genre}/>
        </div>
      )
    })
    var instruments = ['guitar', 'drums']
    var instrumentCheckboxes = instruments.map(instrument => {
      return (
        <div>
          <label>{instrument}</label><input key={instrument}type="checkbox" className='instrumentCheckbox' value={instrument}/>
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
  return bindActionCreators({loginUser}, dispatch)
}

const SmartSignUp2 = connect(mapStateToProps, mapDispatchToProps)(SignUp2)


export default SmartSignUp2;
