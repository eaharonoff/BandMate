import React, { Component } from 'react';
import Search from './search'

class Home extends Component {
  render(){
    return (
      <div>
        <Search />
        {this.props.children}
      </div>
    )
  }
}

export default Home
