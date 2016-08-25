import React from 'react'

const SelectedGenre = ({genre, remove}) => {
  return (
    <center>
      <div className="selected-style" >
        {genre} <a data-genre={genre} onClick={remove} href='#'>remove</a>
      </div>
    </center>
  )
}
export default SelectedGenre
