import currentUser from './currentUser'
import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form'
import currentlyViewing from './currentlyViewing'

export default combineReducers({
  currentUser,
  form,
  currentlyViewing
});
