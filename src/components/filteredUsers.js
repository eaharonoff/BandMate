import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BasicsContainer from './basicsContainer';
import { bindActionCreators }  from 'redux'
import setUser from '../actions/setUser'
import ReactBootstrap from 'react-bootstrap'
import {React_Boostrap_Carousel} from 'react-boostrap-carousel';

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
    var currentView = this.props.searchedUsers[1]
    this.props.setUser(currentView)



  }

  render() {






      return (
  <div id="carousel-example-generic" animation={true} className="carousel slide" data-ride="carousel">

  <div className="carousel-inner" role="listbox">
  <div>
    <div className="carousel-item active item">
        <BasicsContainer style="skyblue" slide="first-slide" data={this.props.searchedUsers[0]}/>
    </div>
  </div>

    <div>
      <div className="carousel-item active item">
      <BasicsContainer style="aqua"  data={this.props.currentlyViewing}/>
      </div>
    </div>

    <div>
      <div className="carousel-item active item">
        <BasicsContainer style="lightpink" data={this.props.searchedUsers[(this.props.searchedUsers.indexOf(this.props.currentlyViewing)) + 1]}/>
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

        // <div style={{height:300,margin:20}}>
        //   <div className="carousel carousel-slide" data-ride="carousel">
        //     <div className="carousel-inner" role="listbox">
        //       <BasicsContainer style="skyblue" slide="first-slide" data={this.props.searchedUsers[0]}/>

        //
        //     </div>
        //   </div>
        //   <div className="btn btn-default" onClick={this.goBackward.bind(this)}>Previous</div>
        //   <button onClick={this.goForward.bind(this)}> Next</button>
        // </div>
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
