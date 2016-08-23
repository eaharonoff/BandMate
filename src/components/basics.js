import React from 'react'


const Basics = ({data, viewProfile}) => {
  !data.picture ? data.picture = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg' : null
  return (
    <div className="basics">

      <a href="#" onClick={viewProfile} id={data.id}>{data.name}, {data.age}</a><br/>
      <div>City: {data.city.name}</div><br/>
      <div>Instruments: {data.instruments.map(instrument => instrument.name).join(", ")}</div><br/>
      <div>Genres: {data.genres.map(genre => genre.name).join(", ")}</div>
    </div>
  )
}
export default Basics


// <img className='img-rounded' src={data.picture} height='100' width='100'></img>
// <div>Instruments: {data.instruments.map(instrument => instrument.name).join(", ")}</div>
// <div>Genres: {data.genres.map(genre => genre.name).join(", ")}</div>
