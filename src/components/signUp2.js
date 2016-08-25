import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateUser from '../actions/updateUser';
import axios from 'axios'
import GenreForm from './genreForm'
import InstrumentForm from './instrumentForm'
import addGenre from '../actions/addGenre'
import addInstrument from '../actions/addInstrument'
import removeGenre from '../actions/removeGenre'
import removeInstrument from '../actions/removeInstrument.js'
import SelectedGenre from './selectedGenre'
import SelectedInstrument from './selectedInstrument'
import EmbedSoundcloud from './embedSoundcloud'
import genreHelper from '../helpers/genreHelper.js'
import instrumentHelper from '../helpers/instrumentHelper.js'
import removeAllGenres from '../actions/removeAllGenres'
import removeAllInstruments from '../actions/removeAllInstruments'

class SignUp2 extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.removeAllGenres()
    this.props.removeAllInstruments()
  }

  submitGenre(event){
    event.preventDefault()
    var result = genreHelper(event)
    this.props.addGenre(result[0].name)
  }

  removeGenre(event){
    event.preventDefault()
    var genre = event.target.dataset.genre
    this.props.removeGenre(genre)
  }

  submitInstrument(event){
    event.preventDefault()
    var result = instrumentHelper(event)
    this.props.addInstrument(result[0].name)
  }

  removeInstrument(event){
    event.preventDefault()
    var instrument = event.target.dataset.instrument
    this.props.removeInstrument(instrument)
  }

  handleSubmit(event){
    event.preventDefault()
    var soundcloud = document.getElementById('soundcloudInput').value
    var formattedSoundcloud = soundcloud.replace(/%/g, "Percent").replace(/"/g, 'Quote').replace(/=/g, 'Equal').replace(/&/g, 'And')
    var user = Object.assign({}, this.props.currentUser, {genres: this.props.selectedGenres.join(' ')}, {instruments: this.props.selectedInstruments.join(' ')}, {soundcloud: formattedSoundcloud})
    var userJSON = JSON.stringify(user)
    axios({method: 'post', url: 'http://localhost:3000/users', data: userJSON}).then(response => {
      if (response.data.info) {
        document.getElementById('errors').innerHTML = response.data.info
      } else {
        response.data.soundcloud = response.data.soundcloud.replace(/450/, "80").replace(/Percent/g, "%").replace(/Quote/g, '"').replace(/Equal/g, '=').replace(/And/g, '&')
        this.props.updateUser(response.data)
        this.context.router.push('/profile')
      }
    })
  }

  render() {
    var selectedGenres = this.props.selectedGenres.map(genre => {
      return <SelectedGenre genre={genre} remove={this.removeGenre.bind(this)}>{genre}</SelectedGenre>
    })
    var selectedInstruments = this.props.selectedInstruments.map(instrument => {
      return <SelectedInstrument instrument={instrument} remove={this.removeInstrument.bind(this)}>{instrument}</SelectedInstrument>
    })
    return (
      <div>
        <div id='errors'></div>
        <GenreForm submit={this.submitGenre.bind(this)}/>
        <center>Selected Genres: {selectedGenres}</center><br />
        <InstrumentForm submit={this.submitInstrument.bind(this)}/>
        <center>Selected Instruments: {selectedInstruments}</center><br />
        <form className='col-centered' onSubmit={this.handleSubmit.bind(this)}>
          Enter Soundcloud (Embed): <EmbedSoundcloud /><br />
          <input type='submit' className='btn btn default' value='Sign Up'></input>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser, selectedGenres: state.selectedGenres, selectedInstruments: state.selectedInstruments}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateUser, addGenre, addInstrument, removeGenre, removeInstrument, removeAllGenres, removeAllInstruments}, dispatch)
}

const SmartSignUp2 = connect(mapStateToProps, mapDispatchToProps)(SignUp2)


export default SmartSignUp2;
