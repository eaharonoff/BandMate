import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicsContainer from './basicsContainer';

class FilteredUsers extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    var userCollection = this.props.searchedUsers.map(user => {
      return (
        <BasicsContainer data={user}/>
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

export default connect(mapStateToProps)(FilteredUsers)
