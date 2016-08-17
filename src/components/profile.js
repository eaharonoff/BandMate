import React from 'react'
import Basics from './basics'
import FriendList from './friendList'

const Profile = ({data}) => {
  return (
    <div>
      <Basics data={data}/>
      <div>Zipcode: {data.zip}</div>
      <div>Bio: {data.bio}</div>
      <div>Music Goes Here: </div>
      <div dangerouslySetInnerHTML={{__html: data.soundcloud}} />
      <FriendList data={data.allFriends} />

    </div>
  )
}
export default Profile
