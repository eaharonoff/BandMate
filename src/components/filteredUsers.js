import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Basics from './basics';
import setUser from '../actions/setUser'

class FilteredUsers extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  handleClick(event){
    event.preventDefault()
    var friendId = event.target.id
    axios({method: 'get', url: `http://localhost:3000/users/${friendId}`}).then((response) => {
      var user = response.data
      this.props.setUser(user)
      this.context.router.push('/users/foo')
    })
  }
  render() {
    var userCollection = this.props.searchedUsers.map(user => {
        return (
          <div onClick={this.handleClick.bind(this)}>
            <Basics data={user} />
          </div>
        )
    })
    return (
      <div>
        {userCollection}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {searchedUsers: state.searchedUsers}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setUser}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FilteredUsers)
