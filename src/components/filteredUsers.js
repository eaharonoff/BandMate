import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicsContainer from './basicsContainer';
import { bindActionCreators }  from 'redux'
import setUser from '../actions/setUser'
import ReactBootstrap from 'react-bootstrap'
import { React_Boostrap_Carousel } from 'react-boostrap-carousel';
import ProfileCardContainer from './profileCardContainer'

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

  }

  componentWillMount(){
    var currentView = this.props.searchedUsers[0]
    this.props.setUser(currentView)
  }

  render() {






      return (
  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

  <div className="carousel-inner" role="listbox">
  <div>
    <div className="col-md-4 carousel-item active-item-prev">
        <ProfileCardContainer style="gray" slide="first-slide" data={this.props.searchedUsers[0]}/>
    </div>
  </div>

    <div>
      <div className="col-md-4 carousel-item active item">
      <ProfileCardContainer style="aqua" data={this.props.currentlyViewing}/>
      </div>
    </div>

    <div>
      <div className="col-md-4 carousel-item active-item-next">
        <ProfileCardContainer style="gray" data={this.props.searchedUsers[(this.props.searchedUsers.indexOf(this.props.currentlyViewing)) + 1]}/>
      </div>
    </div>
  </div>
  <a onClick={this.goBackward.bind(this)} className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="icon-prev" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a onClick={this.goForward.bind(this)} className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="icon-next" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
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
