import React, { Component } from 'react';
import { connect } from 'react-redux';


class ConversationContainer extends Component{
  render(){
    var names = []
    var friendName;
    names.push(this.props.conversation.user1_name)
    names.push(this.props.conversation.user2_name)
    for (let i = 0; i<names.length; i++) {
      if(names[i] !== this.props.currentUser.name){
        friendName = names[i]
      }
      //line  7-13 checks the store for the names in this conversation and determines
      //the name of the friend you are conversing with in order to display it on
      // conversations tab
    }
    return (
    <div className='conversation-header'>
      <div id={this.props.conversation.id}  onClick={this.props.handleEvent}>
      {'You and '+ friendName }
      </div>
      <a href='#' data-conversation={this.props.conversation.id} onClick={this.props.remove}>Remove</a>
    </div>
    )
  }
}

function mapStateToProps(state){
  return ({currentUser: state.currentUser, currentConvo: state.currentConvo})
}

export default connect(mapStateToProps)(ConversationContainer)
