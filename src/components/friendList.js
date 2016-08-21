import React, { PropTypes } from 'react'
import BasicsContainer from './basicsContainer'
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import setUser from '../actions/setUser'

class FriendList extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleClick(event) {
    event.preventDefault()
    var friendId = event.target.id
    axios({method: 'get', url: `http://localhost:3000/users/${friendId}`}).then((response) => {
      var user = response.data
      this.props.setUser(user)
      this.context.router.push('/users/foo')
    })
  }

  render() {
    var friends = this.props.data.map((friend) => <BasicsContainer key={friend.id} data={friend}/> )
    return (
      <ul>
      {friends}
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(FriendList)
