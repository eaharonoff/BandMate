import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Conversation extends Component{
  handleClick(event){
    event.preventDefault()
    var convoId = event.target.id
    axios({method: 'get', url: `http://localhost:3000/conversations/${convoId}`}).then((response) => {
    debugger
    })
  }
  render(){
    return(
      <div onClick={this.handleClick.bind(this)}>
        <h3 id={this.props.convoData.id}>{this.props.convoData.name}</h3>

      </div>
    )
  }
}

export default Conversation
