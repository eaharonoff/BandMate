import React from 'react'
import { Route } from 'react-router'
import App from './App'
import SmartSignUp from './components/signUp'
import SmartSignUp2 from './components/signUp2'
import SignIn from './components/signIn'
import Profile from './components/profile'
import Search from './components/search'
import Logout from './components/logout'




export default (
  <Route path='/' component={App}>
    <Route path="/signup" component={SmartSignUp} />
    <Route path="/signup2" component={SmartSignUp2} />
    <Route path="/signin" component={SignIn} />
    <Route path="/profile" component={Profile} />
    <Route path="/search" component={Search} />
    <Route path="/logout" component={Logout} />
  </Route>
  );
