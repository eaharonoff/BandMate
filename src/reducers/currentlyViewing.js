export default function currentlyViewing(state = {}, action){

  switch(action.type){
    case 'SET_USER':
    debugger
      return action.payload
    default:
      return state
  }
}
