import React, { Component } from 'react';
import { connect } from 'react-redux';
import Basics from './basics'

class FilteredUsers extends Component {
  render() {
    var userCollection = this.props.searchedUsers.map(user => {
        return <Basics data={user}/>
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

export default connect(mapStateToProps)(FilteredUsers)
