import currentUser from './currentUser'
import searchedUsers from './searchedUsers'
import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form'

export default combineReducers({
  currentUser,
  searchedUsers,
  form
});
