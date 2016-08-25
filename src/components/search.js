import React, { Component, PropTypes } from 'react';
import axios from 'axios'
import searchUsers from '../actions/searchUsers'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
import Fuse from 'fuse.js'
import removeAllGenres from '../actions/removeAllGenres'
import removeAllInstruments from '../actions/removeAllInstruments'
import setUser from '../actions/setUser'

class Search extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.removeAllGenres()
    this.props.removeAllInstruments()
  }

  handleSubmit(event){
    event.preventDefault()
    var genres = this.props.selectedGenres.join(" ")
    var instruments = this.props.selectedInstruments.join(" ")
    var userId = this.props.currentUser.id
    var userCity = this.props.currentUser.city.name
    var miles = event.target.children[1].value
    var userJSON= JSON.stringify({genres, instruments, userId, userCity, miles})
    axios({method: 'post', url: 'http://localhost:3000/users/filter', data: userJSON}).then(response => {
      response.data.forEach(datum => {
        datum.soundcloud = datum.soundcloud.replace(/Percent/g, "%").replace(/Quote/g, '"').replace(/Equal/g, '=').replace(/And/g, '&')
      })
      this.props.searchUsers(response.data)
      var currentView = this.props.searchedUsers[0]
      this.props.setUser(currentView)
      this.context.router.push('/results')
    })
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

  render() {
    var selectedGenres = this.props.selectedGenres.map(genre => {
      return <SelectedGenre genre={genre} remove={this.removeGenre.bind(this)}>{genre}</SelectedGenre>
    })
    var selectedInstruments = this.props.selectedInstruments.map(instrument => {
      return <SelectedInstrument instrument={instrument} remove={this.removeInstrument.bind(this)}>{instrument}</SelectedInstrument>
    })
    var divStyle = {
      textAlign: 'center'
    }
    return (
      <div>
        <div id='errors'></div>
        <GenreForm submit={this.submitGenre.bind(this)}/>
        Selected Genres: {selectedGenres}
        <InstrumentForm submit={this.submitInstrument.bind(this)}/>
        Selected Instruments: {selectedInstruments}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label for='miles'>Maximum Distance (Miles):</label>
          <input type='text' id='miles'></input>
          <br></br>
          <input type='submit' className="btn btn-default"></input>
        </form>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser, selectedGenres: state.selectedGenres, selectedInstruments: state.selectedInstruments, searchedUsers: state.searchedUsers}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchUsers, addGenre, addInstrument, removeGenre, removeInstrument, removeAllGenres, removeAllInstruments, setUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
