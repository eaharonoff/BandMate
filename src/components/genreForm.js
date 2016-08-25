import React from 'react'

const GenreForm = ({submit}) => {
  return (
    <form className='col-centered' onSubmit={submit}>
      <label>Select Genres</label>
      <br></br>
      <input type='text'/>
      <input type='submit' value="add" className="btn btn-default"/>
    </form>
  )
}

export default GenreForm
