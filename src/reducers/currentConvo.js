export default function addConvo(state = {}, action){
  switch(action.type){
    case 'SAVE_CONVO':
      return action.payload
    default:
      return state
  }
}
