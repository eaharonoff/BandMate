import React from 'react'

const SelectedGenre = ({genre, remove}) => {
  return (
    <div>
      {genre} <a data-genre={genre} onClick={remove} href='#'>remove</a>
    </div>
  )
}
export default SelectedGenre
