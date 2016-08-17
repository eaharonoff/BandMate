function declineFriendRequest(request){

  return {
    type: 'DECLINE_FRIEND_REQUEST',
    payload: request
  }
}
export default declineFriendRequest
