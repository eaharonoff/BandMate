import React, { Component } from 'react';

class ConversationContainer extends Component{

  render(){
    return(
    <div>
      <div onClick={this.props.handleEvent.bind(this)}>
        <div id={this.props.id}>{this.props.conversation.name}</div>
      </div>
    </div>
    )
  }
}

export default ConversationContainer


