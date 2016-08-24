import React from 'react'
import { Link } from 'react-router';


const Thumbnail = ({data,viewProfile}) => {
  !data.picture ? data.picture = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg' : null
  return (
  <div className='col-md-3'>
    <figure className='figure'>
      <img id={data.id} onClick={viewProfile} className='img-rounded' src={data.picture} height='75' width='75'></img>
      <caption className="figure-caption">{data.name}</caption>
    </figure>
  </div>

  )
}
export default Thumbnail
