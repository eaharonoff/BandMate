export default function currentUser(state = {}, action){
  switch(action.type){
    case 'ADD_USER':
      return {name: action.name, zip: action.zip, email: action.email, password: action.password}
    case 'LOGIN_USER':
      return action.payload
    case 'DELETE_USER':
      return {}
    default:
      return state
  }
}
