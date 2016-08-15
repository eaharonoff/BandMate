export default function currentUser(state = {}, action){
  switch(action.type){
    case 'ADD_USER':
      return {email: action.email , password: action.password, zip: action.zip}
    case 'EDIT_USER':
      var newState = Object.assign({}, state, {genres: action.genres}, {instruments: action.instruments})
      return newState
    default:
      return state
  }
}
