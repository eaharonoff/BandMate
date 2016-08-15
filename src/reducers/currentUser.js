export default function currentUser(state = {}, action){
  switch(action.type){
    case 'ADD_USER':
      return {email: action.email , password: action.password, zip: action.zip}
    case 'EDIT_USER':
      var newState = Object.assign({}, state, {genre: action.genre}, {instrument: action.instrument})
      return newState
    default:
      return state
  }
}
