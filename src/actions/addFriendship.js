function addFriendship(request){

  return {
    type: 'ADD_FRIENDSHIP',
    payload: request
  }
}
export default addFriendship
