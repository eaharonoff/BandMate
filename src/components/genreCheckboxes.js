import React from 'react'

const GenreCheckboxes = () => {
  var genres = ['rock', 'pop', 'punk', 'polka']
  var boxes = genres.map((genre) => {
    return (
      <div className='genres required'>
        <label>{genre}</label><input key={genre} type="checkbox" className='genreCheckbox' value={genre}/>
      </div>
    )
  })
  return <div>{boxes}</div>
}

export default GenreCheckboxes
