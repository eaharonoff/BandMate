import React, { Component, PropTypes } from 'react';
import axios from 'axios'
import GenreCheckboxes from './genreCheckboxes'
import InstrumentCheckboxes from './instrumentCheckboxes'
import checkboxHelper from '../helpers/checkboxHelper'
import searchUsers from '../actions/searchUsers'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

class Search extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  handleSubmit(event){
    event.preventDefault()
    var genres = checkboxHelper().genres.join(" ")
    var instruments = checkboxHelper().instruments.join(" ")
    var userId = this.props.currentUser.id
    var userJSON= JSON.stringify({genres, instruments, userId})
    axios({method: 'post', url: 'http://localhost:3000/users/filter', data: userJSON}).then(response => {
      this.props.searchUsers(response.data)

      this.context.router.push('/results')
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          Choose Genres: <GenreCheckboxes />
          Choose Instruments: <InstrumentCheckboxes />
          <input type='submit' className="btn btn-default"></input>
        </form>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchUsers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
