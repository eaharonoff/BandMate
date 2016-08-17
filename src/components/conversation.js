import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import saveConvo from '../actions/saveConvo'

class Conversation extends Component{
  handleClick(event){
    event.preventDefault()
    var convoId = event.target.id
    axios({method: 'get', url: `http://localhost:3000/conversations/${convoId}`}).then((response) => {
    this.props.saveConvo(response.data)
    })
  }
  render(){
    return(
      <div onClick={this.handleClick.bind(this)}>
        <div id={this.props.convoData.id}>{this.props.convoData.name}</div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
 return bindActionCreators({saveConvo}, dispatch)
}

export default connect(null,mapDispatchToProps)(Conversation) 
