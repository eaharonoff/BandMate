import React from 'react'

const InstrumentsAndGenres = ({instruments, genres}) => {
  return (
    <div>
      <div>Instruments: {instruments.map(instrument => instrument.name).join(", ")}</div>
      <div>Genres: {genres.map(genre => genre.name).join(", ")}</div>
    </div>
  )
}
export default InstrumentsAndGenres
