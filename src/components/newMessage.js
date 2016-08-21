import React from 'react'

const NewMessage = ({createMessage}) => {

  return (
    <div>
      <textarea></textarea>
      <button onClick={createMessage}>Send</button>
    </div>
  )
}

export default NewMessage