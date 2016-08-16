import React from 'react'
import Basics from './basics'
import SmartFriendList from './friendList'

const Profile = ({data}) => {
  
    return (
    <div>
      <Basics data={data}/>
      <div>Zipcode: {data.zip}</div>
      <div>Bio: {data.bio}</div>
      <div>Music Goes Here: {data.music}</div>
      <SmartFriendList data={data.all_friends} />
    </div>
  )
}
export default Profile
