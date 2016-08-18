import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicsContainer from './basicsContainer';
import { bindActionCreators }  from 'redux'
import setUser from '../actions/setUser'

class FilteredUsers extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    
    var currentView = this.props.searchedUsers[0]
    this.props.setUser(currentView)
  }

  render() {
    debugger
      return (
        <BasicsContainer data={this.props.currentlyViewing}/>
      )
  }
}

function mapStateToProps(state) {
  return {searchedUsers: state.searchedUsers, currentlyViewing: state.currentlyViewing}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilteredUsers)
