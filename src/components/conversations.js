import React, { Component } from 'react';
import { connect } from 'react-redux';
import Conversation from './conversation';


class Conversations extends Component{

  render(){
    var conversations = this.props.currentUser.conversations.map((conversation) => {
      return (
        <div>
          <Conversation convoData={conversation} />
        </div>
      )
    })
      return (
        <div>
        {conversations}
        </div>
      )

  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser}
}


export default connect(mapStateToProps)(Conversations)
