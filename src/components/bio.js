import React, { Component } from 'react';
import { connect } from 'react-redux';


class Bio extends Component {
  render() {
    return (
      <div id='user-bio'>
        <div className='user-data'>Zip code: {this.props.currentUser.zip}</div>
        <div className='user-data'>Bio:{this.props.currentUser.bio}</div>
        <div className='user-data'>Instruments:{this.props.currentUser.instruments}</div>
        <div className='user-data'>Genres:{this.props.currentUser.genres}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

var SmartBio = connect(mapStateToProps)(Bio)

export default SmartBio;