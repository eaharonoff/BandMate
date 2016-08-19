import currentUser from './currentUser'
import searchedUsers from './searchedUsers'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import currentlyViewing from './currentlyViewing'
import currentConvo from './currentConvo'
import currentPicture from './currentPicture'

export default combineReducers({
  currentUser,
  currentConvo,
  currentPicture,
  currentlyViewing,
  searchedUsers,
  form
});
