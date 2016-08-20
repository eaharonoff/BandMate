import React from 'react'

const Messages = ({data}) => {
  var currentMessages = data.messages.map((message) => {
    return (
      <div>
        <strong>{message.sender.name}</strong><p>{message.body}</p>
      </div>
      )
  })
  return (
    <div>{currentMessages}</div>
  )
}

export default Messages