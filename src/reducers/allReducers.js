import currentUser from './currentUser'
import searchedUsers from './searchedUsers'
import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form'
import currentlyViewing from './currentlyViewing'
import currentConvo from './currentConvo'

export default combineReducers({
  currentUser,
  searchedUsers,
  form,
  currentlyViewing,
  currentConvo
});
