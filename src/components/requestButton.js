import React from 'react'

const RequestButton = ({sendRequest, userId}) => {
  return (
    <div data-id={userId}>
      <button onClick={sendRequest} className="btn btn default">Add Friend</button>
    </div>
  )
}
export default RequestButton
