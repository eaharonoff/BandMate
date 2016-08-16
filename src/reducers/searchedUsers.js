export default function searchedUsers(state = [], action){
  switch(action.type){
    case 'SEARCH_USERS':
      return action.payload
    default:
      return state
  }
}
