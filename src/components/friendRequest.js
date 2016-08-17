import React from 'react'

const FriendRequest = ({accept, decline, sender}) => {
  return (
    <div data-id={sender.id}>
      <h3>{sender.name} requested to be your friend</h3>
      <button onClick={accept}>Accept</button>
      <button onClick={decline}>Decline</button>
    </div>
  )
}
export default FriendRequest
