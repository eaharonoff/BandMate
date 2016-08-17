import React, {PropTypes} from 'react'
import Basics from './basics'
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
    return (
      <ul> {this.props.data.map((friend) => {
          return (<Basics data={friend}/>)
        })}
        </ul>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setUser}, dispatch)
}

var SmartFriendList = connect(null, mapDispatchToProps)(FriendList)
export default SmartFriendList
