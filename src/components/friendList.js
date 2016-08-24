import React, { PropTypes } from 'react'
import Thumbnail from './thumbnail'
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
    var friends = this.props.data.slice(0, 8).map((friend) => <Thumbnail key={friend.id} data={friend} viewProfile={this.handleClick.bind(this)}/> )
    return (
      <div className='friends-container'>
        <h3> Friends </h3>
        {friends}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(FriendList)
