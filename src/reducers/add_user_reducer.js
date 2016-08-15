export default function currentUser(state = {}, action){
  switch(action.type){
    case 'ADD_USER':
      return state = {email: action.email , password: action.password, zip: action.password }
    case 'EDIT_USER':
      var newState = Object.assign({}, state)
      newState.genre = action.genre
      newState.instrument = action.instrument
      debugger
      return newState
    default:
      return state 
  }
}
