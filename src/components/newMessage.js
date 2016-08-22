import React from 'react'

const NewMessage = ({createMessage}) => {

  return (
    <div className='new-message-container'>
      <textarea></textarea>
      <button onClick={createMessage} className="btn-primary">Send</button>
    </div>
  )
}

export default NewMessage