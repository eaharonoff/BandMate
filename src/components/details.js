import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmartBio from './bio';
import SmartMusic from'./music';



class Details extends Component {
  render() {
    return (
      <div id='user-details'>
        <SmartBio />
        <SmartMusic />
      </div>
    )
  }
}

export default Details;