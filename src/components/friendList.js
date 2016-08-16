import React from 'react'
import Basics from './basics'
import Component from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'redux'
import axios from 'axios'

const FriendList = ({data}) => {
  function handleClick(event) {
    ax

  }

    return(
      <ul> {data.map((friend) => {
          return (<li onClick={handleClick.bind(this)} id={friend.id}> {friend.name}  </li>)
        })
      } </ul>
    )
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({getUser}, dispatch)
// }
//
// var smartFriendlist = connect(null,mapDispatchToProps)(FriendList)
 export default FriendList
