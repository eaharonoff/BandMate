export default function selectedGenres(state = [], action) {
  switch(action.type) {
    case 'ADD_GENRE':
      var newState = [].concat(state)
      newState.push(action.payload)
      return newState
    case 'REMOVE_GENRE':
      var newState = [].concat(state)
      newState.splice(newState.indexOf(action.payload), 1)
      return newState
    case 'REMOVE_ALL_GENRES':
      return []
    case 'FETCH_GENRES':
      return action.payload
    default:
      return state
  }
}
