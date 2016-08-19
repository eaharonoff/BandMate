export default function currentPicture(state = {}, action){
  switch(action.type){
    case 'UPLOAD_PICTURE':
      return action.payload
    default:
      return state
  }
}
