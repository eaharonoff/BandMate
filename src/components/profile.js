import React from 'react'
import Basics from './basics'
import FriendList from './friendList'

const Profile = ({data}) => {
    return (
    <div>
      <Basics data={data}/>
      <div>Bio: {data.bio}</div>
      <div>Music Goes Here: {data.music}</div>
      <FriendList data={data.all_friends} />
    </div>
  )
}
export default Profile
