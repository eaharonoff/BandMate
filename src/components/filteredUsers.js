import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicsContainer from './basicsContainer';
import { bindActionCreators }  from 'redux'
import setUser from '../actions/setUser'

class FilteredUsers extends Component {




  static contextTypes = {
    router: PropTypes.object
  }

  goBackward(){
    var index = this.props.searchedUsers.indexOf(this.props.currentlyViewing)
    this.props.setUser(this.props.searchedUsers[index - 1])
  }

  goForward(){
      var index = this.props.searchedUsers.indexOf(this.props.currentlyViewing)
      this.props.setUser(this.props.searchedUsers[index + 1])
      debugger
  }

  componentWillMount(){
    var currentView = this.props.searchedUsers[1]
    this.props.setUser(currentView)



  }

  render() {



      return (


        <div>
          <p><BasicsContainer data={this.props.searchedUsers[0]}/></p>
          <p><BasicsContainer data={this.props.currentlyViewing}/></p>
          <button onClick={this.goBackward.bind(this)}>Previous</button>
          <button onClick={this.goForward.bind(this)}> Next</button>
          <p><BasicsContainer data={this.props.searchedUsers[(this.props.searchedUsers.indexOf(this.props.currentlyViewing)) + 1]}/></p>
        </div>
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
