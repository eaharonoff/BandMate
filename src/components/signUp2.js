import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateUser from '../actions/updateUser';
import axios from 'axios'
import GenreCheckboxes from './genreCheckboxes'
import InstrumentCheckboxes from './instrumentCheckboxes'
import EmbedSoundcloud from './embedSoundcloud'
import checkboxHelper from '../helpers/checkboxHelper'

class SignUp2 extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  handleSubmit(event){
    event.preventDefault()
    var genres = checkboxHelper().genres
    var instruments = checkboxHelper().instruments
    var soundcloud = document.getElementById('soundcloudInput').value
    var formattedSoundcloud = soundcloud.replace(/%/g, "Percent").replace(/"/g, 'Quote').replace(/=/g, 'Equal').replace(/&/g, 'And')
    var user = Object.assign({}, this.props.currentUser, {genres: genres.join(' ')}, {instruments: instruments.join(' ')}, {soundcloud: formattedSoundcloud})
    var userJSON = JSON.stringify(user)
    axios({method: 'post', url: 'http://localhost:3000/users', data: userJSON}).then(response => {
      response.data.soundcloud = response.data.soundcloud.replace(/Percent/g, "%").replace(/Quote/g, '"').replace(/Equal/g, '=').replace(/And/g, '&')
      this.props.updateUser(response.data)
      debugger
      this.context.router.push('/profile')
    })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
        Choose Genres: <GenreCheckboxes />
        Choose Instruments: <InstrumentCheckboxes />
        Enter Soundcloud (Embed): <EmbedSoundcloud />
        <input type='submit'></input>
        </form>
    );
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateUser}, dispatch)
}

const SmartSignUp2 = connect(mapStateToProps, mapDispatchToProps)(SignUp2)


export default SmartSignUp2;
