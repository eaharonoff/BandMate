import React from 'react'

const GenreForm = ({submit}) => {
  return (
    <form className='col-centered' onSubmit={submit}>
      <label>Select Genres!</label>
      <input type='text'/>
      <input type='submit'/>
    </form>
  )
}

export default GenreForm
