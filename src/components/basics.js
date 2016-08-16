import React from 'react'

const Basics = ({data}) => {
  return (
    <div>
      <h3>{data.name}, {data.age}</h3>
      <div>Zipcode: {data.zip}</div>
      <div>Instruments: {data.instruments.map(instrument => instrument.name).join(", ")}</div>
      <div>Genres: {data.genres.map(genre => genre.name).join(", ")}</div>
    </div>
  )
}

export default Basics
