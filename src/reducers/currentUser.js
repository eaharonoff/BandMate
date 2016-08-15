export default function currentUser(state = {}, action){
  switch(action.type){
    case 'ADD_USER':
      return {email: action.email , password: action.password, zip: action.zip}
    case 'LOGIN_USER':
      return action.payload
    default:
      return state
  }
}
