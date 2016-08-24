import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setUser from '../actions/setUser'
import addFriendRequest from '../actions/addFriendRequest'
import axios from 'axios'
import ProfileCard from './profileCard'
import RequestButton from './requestButton'

class ProfileCardContainer extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  viewProfile(event) {
    event.preventDefault()
    var userId = event.target.id
    axios({method: 'get', url: `http://localhost:3000/users/${userId}`}).then((response) => {

      if (response.data.soundcloud) {
        response.data.soundcloud = response.data.soundcloud.replace(/Percent/g, "%").replace(/Quote/g, '"').replace(/Equal/g, '=').replace(/And/g, '&')
      }
      var user = response.data
      this.props.setUser(user)
      this.context.router.push('/users/foo')
    })
  }
  sendRequest(event) {
    event.preventDefault()
    var myId = this.props.currentUser.id
    var userId = event.target.parentElement.dataset.id
    var data = {myId, userId}
    var dataJSON = JSON.stringify(data)
    axios({method: 'post', url: 'http://localhost:3000/friend_requests', data: dataJSON}).then(response => {
      this.props.addFriendRequest(response.data)
    })
  }
  render(){
    var idArray = this.props.currentUser.allFriends.map(friend => friend.id)
    idArray.push(this.props.currentUser.id)

    var styling = {
      backgroundColor: this.props.style
    }

    if (idArray.find((id) => id === this.props.data.id) !== undefined ) {
      return (
        <div>
          <ProfileCard data={this.props.data} viewProfile={this.viewProfile.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div className="carousel-item">
          <ProfileCard data={this.props.data} viewProfile={this.viewProfile.bind(this)}/>
          <RequestButton sendRequest={this.sendRequest.bind(this)} userId={this.props.data.id}/>
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addFriendRequest, setUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCardContainer)
