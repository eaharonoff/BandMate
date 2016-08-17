const RequestHelper = (node, currentUser) => {
  var senderId = node.parentElement.dataset.id
  var userId = currentUser.id
  var data = JSON.stringify({senderId, userId})
  return data
}

export default RequestHelper
