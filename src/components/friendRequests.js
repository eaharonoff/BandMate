import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateUser from '../actions/updateUser'
import axios from 'axios'
import FriendRequest from './friendRequest'
import requestHelper from '../helpers/requestHelper'

class FriendRequests extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  acceptRequest(event){
    event.preventDefault()
    var data = requestHelper(event.target, this.props.currentUser)
    axios({method: 'post', url: 'http://localhost:3000/friendships', data: data}).then(response => {
      this.props.updateUser(response.data)
    })
  }

  declineRequest(event){
    event.preventDefault()
    var data = requestHelper(event.target, this.props.currentUser)
    axios({method: 'post', url: 'http://localhost:3000/friend_requests/delete', data: data}).then(response => {
      this.props.updateUser(response.data)
    })
  }

  render() {
    var friendRequests = this.props.currentUser.received_requests.map((request) => {
      return <FriendRequest accept={this.acceptRequest.bind(this)} decline={this.declineRequest.bind(this)} sender={request.sender}/>
    })
    return <div>{friendRequests}</div>
  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequests)
