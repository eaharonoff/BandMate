import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ConversationContainer from './conversationContainer';
import axios from 'axios';
import saveConvo from '../actions/saveConvo'


class Conversations extends Component{
  
  handleClick(event){
      event.preventDefault()
      axios({method: 'get', url: `http://localhost:3000/conversations/${event.target.id}`}).then((response) => {
      this.props.saveConvo(response.data)
    })
  }
  render(){
    var allConversations = this.props.currentUser.conversations.map((conversation) => {
      return (
          <ConversationContainer id={conversation.id} conversation={conversation} handleEvent={this.handleClick.bind(this)} />
      )
    }, this)
    return (
      <div>
      {allConversations}
      <CurrentConversation chat={this.props.currentConvo} />
      </div>
    )

  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser, currentConvo: state.currentConvo }
}


function mapDispatchToProps(dispatch){
 return bindActionCreators({saveConvo}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Conversations)
