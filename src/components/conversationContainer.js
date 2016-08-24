import React, { Component } from 'react';
import { connect } from 'react-redux';


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
      <li id={this.props.conversation.id} className='list-unstyled' onClick={this.props.handleEvent.bind(this)}>
        <div id={this.props.conversation.id}>{'You and '+ friendName}</div>
      </li>
    )
  }
}



function mapStateToProps(state){
  return ({currentUser: state.currentUser})
}

export default connect(mapStateToProps)(ConversationContainer)
