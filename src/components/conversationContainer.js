import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ConversationContainer extends Component{  
  render(){
    var names=[]
    var friendName;
    names.push(this.props.conversation.user1_name)
    names.push(this.props.conversation.user2_name)
    for(let i = 0;i<names.length;i++){
      if(names[i] !== this.props.currentUser.name){
        friendName = names[i]
      }
    }
    return(
      <div onClick={this.props.handleEvent.bind(this)}>
        <div id={this.props.conversation.id}>{ 'You and '+ friendName}</div>
      </div>
    )
  }
}



function mapStateToProps(state){
  return ({currentUser: state.currentUser})
}

export default connect(mapStateToProps)(ConversationContainer)


