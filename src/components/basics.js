import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateUser from '../actions/updateUser'
import axios from 'axios'

class Basics extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  handleClick(event) {
    event.preventDefault()
    var friendId = event.target.id
    axios({method: 'get', url: `http://localhost:3000/users/${friendId}`}).then((response) => {
      var user = response.data
      this.props.setUser(user)
      this.context.router.push('/users/foo')
    })
  }
  sendRequest(event) {
    event.preventDefault()
    var myId = this.props.currentUser.id
    var friendId = this.props.data.id
    var data = {myId, friendId}
    var dataJSON = JSON.stringify(data)
    axios({method: 'post', url: 'http://localhost:3000/friend_requests', data: dataJSON}).then(response => {
      this.props.updateUser(response.data)
    })
  }
  render() {
    var idArray = this.props.currentUser.allFriends.map(friend => friend.id)
    idArray.push(this.props.currentUser.id)
    if (idArray.find((id) => id === this.props.data.id) !== undefined ) {
      return (
        <div>
          <a href="#" onClick={this.handleClick.bind(this)} id={this.props.data.id}>{this.props.data.name}, {this.props.data.age}</a>
          <div>Instruments: {this.props.data.instruments.map(instrument => instrument.name).join(", ")}</div>
          <div>Genres: {this.props.data.genres.map(genre => genre.name).join(", ")}</div>
        </div>
      )
    } else {
      return (
        <div>
          <a href="#" onClick={this.handleClick.bind(this)} id={this.props.data.id}>{this.props.data.name}, {this.props.data.age}</a>
          <div>Instruments: {this.props.data.instruments.map(instrument => instrument.name).join(", ")}</div>
          <div>Genres: {this.props.data.genres.map(genre => genre.name).join(", ")}</div>
          <button onClick={this.sendRequest.bind(this)}>hey girl</button>
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Basics)
