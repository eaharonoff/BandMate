import React from 'react'

const GenreForm = ({submit}) => {
  return (
    <form onSubmit={submit}>
      <label>Select Genres!</label>
      <input type='text'/>
      <input type='submit'/>
    </form>
  )
}

export default GenreForm
