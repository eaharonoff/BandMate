export default function currentUser(state = {}, action){
  switch(action.type){
    case 'ADD_USER':
      return {name: action.name, zip: action.zip, email: action.email, password: action.password}
    case 'UPDATE_USER':
      var allFriends = [].concat(action.payload.inverse_friends).concat(action.payload.friends)
      return Object.assign(action.payload, {allFriends})
    case 'DELETE_USER':
      return {}
    default:
      return state
  }
}
