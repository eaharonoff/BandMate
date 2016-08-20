import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Messages from './messages';
import NewMessage from './newMessage';
import saveConvo from '../actions/saveConvo'

class Conversation extends Component {

  createMessage(event) {
    event.preventDefault()
    var message = event.target.parentElement.children[0].value
    var conversationId = this.props.currentConvo.id
    var currentUserId = this.props.currentUser.id
    var messageObj = {message, conversationId, currentUserId }
    var messageJSON = JSON.stringify(messageObj)
    axios({method: 'post', url: 'http://localhost:3000/messages', data: messageJSON}).then(response => {
      this.props.saveConvo(response.data)
    })
  }
  render() {

    return (
    <div>
      <Messages data={this.props.currentConvo} />
      <NewMessage createMessage={this.createMessage.bind(this)}/>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentConvo: state.currentConvo, currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({saveConvo},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Conversation)


