import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ConversationContainer from './conversationContainer';
import axios from 'axios';
import saveConvo from '../actions/saveConvo'


class Conversations extends Component{
  static contextTypes = {
    router: PropTypes.object
  }
  handleClick(event){
      event.preventDefault()
      axios({method: 'get', url: `http://localhost:3000/conversations/${event.target.id}`}).then((response) => {
      this.props.saveConvo(response.data)
      this.context.router.push("/conversation")
    })
  }
  render(){
    var allConversations = this.props.currentUser.all_conversations.map((conversation) => {
      return (
          <ul className='conversation' key={conversation.id}>
          <ConversationContainer key={conversation.id} id={conversation.id} conversation={conversation} handleEvent={this.handleClick.bind(this)} />
          </ul>
      )
    }, this)
    return (
      <div className='container'>
        <div className='.col-md-4'>
          {allConversations} 
        </div>
        {this.props.children}
      </div>
    )

  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser}
}


function mapDispatchToProps(dispatch){
 return bindActionCreators({saveConvo}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Conversations)
