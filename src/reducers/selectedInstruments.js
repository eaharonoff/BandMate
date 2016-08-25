export default function selectedInstruments(state = [], action) {
  switch(action.type) {
    case 'ADD_INSTRUMENT':
      var newState = [].concat(state)
      if (!newState.includes(action.payload)) {
        newState.push(action.payload)
      }
      return newState
    case 'REMOVE_INSTRUMENT':
      var newState = [].concat(state)
      newState.splice(newState.indexOf(action.payload), 1)
      return newState
    case 'REMOVE_ALL_INSTRUMENTS':
      return []
    case 'FETCH_INSTRUMENTS':
      return action.payload
    default:
      return state
  }
}
