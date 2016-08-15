import React from 'react'
import { Route } from 'react-router'
import App from './App'
import SmartSignUp from './components/sign_up'
import SmartSignUp2 from './components/sign_up_2'


export default (
  <Route path='/' component={App}>
    <Route path="/signup" component={SmartSignUp} />
    <Route path="/signup2" component={SmartSignUp2} />
  </Route> 
  );