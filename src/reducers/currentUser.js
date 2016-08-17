export default function currentUser(state = {}, action){
  var newState
  var idx
  var requests
  switch(action.type){
    case 'ADD_USER':
      return {name: action.name, zip: action.zip, email: action.email, password: action.password}
    case 'UPDATE_USER':
      var allFriends = [].concat(action.payload.inverse_friends).concat(action.payload.friends)
      return Object.assign(action.payload, {allFriends})
    case 'ADD_FRIEND_REQUEST':
      newState = Object.assign({}, state)
      newState.sent_requests.push(action.payload)
      return newState
    case 'ADD_FRIENDSHIP':
      newState = Object.assign({}, state)
      requests = newState.received_requests
      idx = requests.indexOf(requests.find(request => request.id === action.payload.id))
      newState.received_requests.splice(idx, 1)
      newState.allFriends.push(action.payload.sender)
      return newState
    case 'DECLINE_FRIEND_REQUEST':
      newState = Object.assign({}, state)
      requests = newState.received_requests
      idx = requests.indexOf(requests.find(request => request.id === action.payload.id))
      newState.received_requests.splice(idx, 1)
      return newState
    case 'DELETE_USER':
      return {}
    default:
      return state
  }
}
