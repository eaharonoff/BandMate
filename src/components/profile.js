import React from 'react'
import Basics from './basics'

const Profile = ({data}) => {
  return (
    <div>
      <Basics data={data}/>
      <div>Zipcode: {data.zip}</div>
      <div>Bio: {data.bio}</div>
      <div>Music Goes Here: {data.music}</div>
    </div>
  )
}

export default Profile
