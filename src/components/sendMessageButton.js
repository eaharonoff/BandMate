import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import saveConvo from '../actions/saveConvo'

class sendMessageButton extends Component{
  static contextTypes = {
    router: PropTypes.object
  };

 sendMessage(){
  var userClicked = this.props.user.id
  var currentUser = this.props.currentUser.id
  function findConversation(convoObj){
    return convoObj.user1_id === userClicked || convoObj.user2_id === userClicked
  }
  var conversation = this.props.currentUser.all_conversations.find(findConversation)
  if (conversation !== undefined){
    axios({method: 'get', url: `http://localhost:3000/conversations/${conversation.id}`}).then((response) => {
      this.props.saveConvo(response.data)
      this.context.router.push('/conversation')
    })
  }else{
      var createConversation = {currentUser, userClicked}
      var conversationJSON = JSON.stringify(createConversation)
      axios({method: 'post', url: `http://localhost:3000/conversations`, data: conversationJSON}).then((response) => {
        this.props.saveConvo(response.data)
        this.context.router.push('/conversation')
      })
    }
} render(){
    return(
      <button onClick={this.sendMessage.bind(this)} className="message-btn btn default">Send Message</button> 
    )

  }
}
function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({saveConvo},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(sendMessageButton)
