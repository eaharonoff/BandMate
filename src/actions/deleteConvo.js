function deleteConvo(convoId){

  return {
    type: 'DELETE_CONVO',
    payload: convoId
  }
}
export default deleteConvo
