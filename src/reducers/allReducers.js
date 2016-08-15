import currentUser from './currentUser'
import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form'

export default combineReducers({
  currentUser,
  form
});
