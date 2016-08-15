import React, { Component } from 'react';
import { connect } from 'react-redux';


class Bio extends Component {
  render() {
    return (
      <div id='user-bio'>
        Zip code: {this.props.currentUser.zip}
        Bio:{this.props.currentUser.bio}
        Instruments:{this.props.currentUser.instruments}
        Genres:{this.props.currentUser.genres}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

var SmartBio = connect(mapStateToProps)(Bio)

export default SmartBio;