import React from 'react';

const Profile = ({data}) => {
  return (
    <div>
      <h3>{data.email}, {data.age}</h3>
      <div>Zip code: {data.zip}</div>
      <div>Bio:{data.bio}</div>
      <div>Instruments:{data.instruments.map(instrument => instrument.name)}</div>
      <div>Genres:{data.genres.map(genre => genre.name)}</div>
      <div>Music Goes Here:{data.music}</div>
    </div>
  )
}

export default Profile
