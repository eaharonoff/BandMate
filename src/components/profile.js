import React from 'react'
import Basics from './basics'

const Profile = ({data}) => {
  return (
    <div>
      <Basics data={data}/>
      <div>Bio: {data.bio}</div>
      <div>Music Goes Here: {data.music}</div>
    </div>
  )
}

export default Profile
