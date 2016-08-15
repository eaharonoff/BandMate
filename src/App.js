import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/signUp'
import SignUp2 from './components/signUp2'

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
