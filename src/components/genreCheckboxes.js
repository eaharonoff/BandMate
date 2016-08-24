import React from 'react'

const GenreCheckboxes = () => {
  var genres = ['rock', 'pop', 'jazz', 'indie', 'jingle', 'blues', 'folk', 'funk', 'gospel', 'techno', 'metal', 'k-pop', 'j-pop', 'classical']
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
