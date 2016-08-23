import React from 'react'


const Basics = ({data, viewProfile}) => {
  !data.picture ? data.picture = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg' : null
  return (
    <div>
      <img className='img-rounded' src={data.picture} height='100' width='100'></img>
      <a href="#" onClick={viewProfile} id={data.id}>{data.name}, {data.age}</a>
      <div>City: {data.city.name}</div>
      <div>Instruments: {data.instruments.map(instrument => instrument.name).join(", ")}</div>
      <div>Genres: {data.genres.map(genre => genre.name).join(", ")}</div>
    </div>
  )
}
export default Basics

// <div>Instruments: {data.instruments.map(instrument => instrument.name).join(", ")}</div>
// <div>Genres: {data.genres.map(genre => genre.name).join(", ")}</div>
