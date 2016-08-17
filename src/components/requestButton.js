import React from 'react'

const RequestButton = ({sendRequest, userId}) => {
  return (
    <div data-id={userId}>
      <button onClick={sendRequest}>Hey Girl</button>
    </div>
  )
}
export default RequestButton
