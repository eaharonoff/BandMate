import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/sign_up'
import SignUp2 from './components/sign_up_2'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
