import React from 'react'

const Messages = ({data, viewProfile}) => {
  var currentMessages = data.messages.map((message) => {
    return (
      <div className='message' key={message.id}>
        <strong className='sender' className={message.sender.id} onClick={viewProfile}>{message.sender.name}</strong>
        <p className='message-body'>{message.body}</p>
      </div>
      )
  })
  return (
    <div>
    {currentMessages}
    </div>
  )
}

export default Messages