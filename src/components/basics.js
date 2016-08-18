import React from 'react'

const Basics = ({data, viewProfile}) => {
  return (
    <div>
      <a href="#" onClick={viewProfile} id={data.id}>{data.name}, {data.age}</a>
    </div>
  )

}
export default Basics


// <div>Instruments: {data.instruments.map(instrument => instrument.name).join(", ")}</div>
// <div>Genres: {data.genres.map(genre => genre.name).join(", ")}</div>
