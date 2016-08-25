import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import updateUser from '../actions/updateUser'
import axios from 'axios'
import genreHelper from '../helpers/genreHelper.js'
import instrumentHelper from '../helpers/instrumentHelper.js'
import Fuse from 'fuse.js'
import GenreForm from './genreForm'
import InstrumentForm from './instrumentForm'
import addGenre from '../actions/addGenre'
import addInstrument from '../actions/addInstrument'
import removeGenre from '../actions/removeGenre'
import removeInstrument from '../actions/removeInstrument.js'
import SelectedGenre from './selectedGenre'
import SelectedInstrument from './selectedInstrument'
import fetchGenres from '../actions/fetchGenres.js'
import fetchInstruments from '../actions/fetchInstruments.js'

class EditProfile extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    var genres = this.props.currentUser.genres.map(genre => genre.name)
    var instruments = this.props.currentUser.instruments.map(instrument => instrument.name)
    this.props.fetchGenres(genres)
    this.props.fetchInstruments(instruments)
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

  otherFunc(props) {
    var zipcode = props.zipcode
    var genres = this.props.selectedGenres.join(" ")
    var instruments = this.props.selectedInstruments.join(" ")
    axios({method: 'get', url: `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyA4X16Aq4qYw7WrqcvZGzdKgeeL26E5irc`}).then(response => {
      var city = response.data.results[0].formatted_address
      var data = this.props.values
      data.city = {}
      data.city.name = city
      var user = Object.assign({}, data, {id: this.props.currentUser.id}, {genres}, {instruments})
      var userJSON = JSON.stringify(user)
      axios({method: 'post', url: 'http://localhost:3000/user', data: userJSON}).then(response => {
        this.props.updateUser(response.data)
        this.context.router.push('/profile')
      })
    }).catch(error => {
      document.getElementById('errors').innerHTML = '<p>Sorry, this is not a valid location entry.</p>'
    })
  }


  render() {
    var selectedGenres = this.props.selectedGenres.map(genre => {
      return <SelectedGenre genre={genre} remove={this.removeGenre.bind(this)}>{genre}</SelectedGenre>
    })
    var selectedInstruments = this.props.selectedInstruments.map(instrument => {
      return <SelectedInstrument instrument={instrument} remove={this.removeInstrument.bind(this)}>{instrument}</SelectedInstrument>
    })
    var user = this.props.currentUser
    const {fields: {name, zipcode, age, bio}, handleSubmit} = this.props;
    return (

      <div className='container'>
        <div id='errors'> </div>
          <div className='col-centered'>
            <GenreForm submit={this.submitGenre.bind(this)}/>
            <center>Selected Genres: {selectedGenres}</center>
            <InstrumentForm submit={this.submitInstrument.bind(this)}/>
            <center>Selected Instruments: {selectedInstruments}</center>
          </div>
          <div className="col-centered">
            <form onSubmit={handleSubmit(this.otherFunc.bind(this))}>
              Name: <input type='text' className='form-control' placeholder={user.name} {...name}/>
              City/State or Zipcode: <input type='text' className='form-control' placeholder={user.zip} {...zipcode}/>
              Age: <input type='number' className='form-control' placeholder={user.age} {...age}/>
              Bio: <textarea className='form-control' placeholder={user.bio} {...bio}/>
              <input type='submit' value="Edit" className="btn btn-default"/>
            </form>
          </div>
      </div>
    )
  }
}

var SmartForm = reduxForm({
  form: 'signUp',
  fields: ['name', 'zipcode', 'age', 'bio']
})(EditProfile);

function mapStateToProps(state) {
  return {currentUser: state.currentUser, selectedGenres: state.selectedGenres, selectedInstruments: state.selectedInstruments}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateUser, addGenre, addInstrument, removeGenre, removeInstrument, fetchGenres, fetchInstruments}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartForm)
