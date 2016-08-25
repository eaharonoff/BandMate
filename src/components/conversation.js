import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Messages from './messages';
import NewMessage from './newMessage';
import updateConvo from '../actions/updateConvo'
import setUser from '../actions/setUser'

class Conversation extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  createMessage(event) {
    event.preventDefault()
    var message = event.target.parentElement.children[0].value
    var conversationId = this.props.currentConvo.id
    var currentUserId = this.props.currentUser.id
    var messageObj = {message, conversationId, currentUserId }
    var messageJSON = JSON.stringify(messageObj)
    axios({method: 'post', url: 'http://localhost:3000/messages', data: messageJSON}).then(response => {
      this.props.updateConvo(response.data)
    })
    event.target.parentElement.children[0].value=''
  }

  viewProfile(event) {
    event.preventDefault()
    var userId = event.target.className
    axios({method: 'get', url: `http://localhost:3000/users/${userId}`}).then((response) => {
      if (response.data.soundcloud) {
        response.data.soundcloud = response.data.soundcloud.replace(/Percent/g, "%").replace(/Quote/g, '"').replace(/Equal/g, '=').replace(/And/g, '&')
      }
      var user = response.data
      this.props.setUser(user)
      this.context.router.push('/users/foo')
    })
  }
 
  render() {
    return (
    <div className='.col-md-3-offset-4'>
        <Messages data={this.props.currentConvo} viewProfile={this.viewProfile.bind(this)}/>
        <hr></hr>
        <NewMessage createMessage={this.createMessage.bind(this)}/>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentConvo: state.currentConvo, currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateConvo, setUser},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Conversation)


