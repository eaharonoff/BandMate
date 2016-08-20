import React from 'react'

const NewMessage = ({createMessage}) => {

  return (
    <div>
      <textarea></textarea>
      <button onClick={createMessage}>click me</button>
    </div>
  )
}

export default NewMessage