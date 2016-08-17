import React from 'react'
import BasicsContainer from './basicsContainer'
import FriendList from './friendList'

const Profile = ({data, notCurrentUser}) => {
  if (notCurrentUser) {
    return (
      <div>
        <BasicsContainer data={data}/>
        <div>Zipcode: {data.zip}</div>
        <div>Bio: {data.bio}</div>
        <div>Music Goes Here: {data.music}</div>
      </div>
    )
  } else {
    return (
      <div>
        <BasicsContainer data={data}/>
        <div>Zipcode: {data.zip}</div>
        <div>Bio: {data.bio}</div>
        <div>Music Goes Here: {data.music}</div>
        <FriendList data={data.allFriends} />
      </div>
    )
  }
}
export default Profile
