import React from 'react'
import BasicsContainer from './basicsContainer'
import FriendList from './friendList'

const Profile = ({data, notCurrentUser}) => {
  if (notCurrentUser) {
    return (
      <div>
        <BasicsContainer data={data}/>
        <div>City: {data.city.name}</div>
        <div>Bio: {data.bio}</div>
        <div>Music Goes Here: {data.music}</div>
        <div dangerouslySetInnerHTML={{__html: data.soundcloud}} />
      </div>
    )
  } else {
    return (
      <div>
        <BasicsContainer data={data}/>
        <div>City: {data.city.name}</div>
        <div>Bio: {data.bio}</div>
        <div>Music Goes Here: </div>
        <div dangerouslySetInnerHTML={{__html: data.soundcloud}} />
        <FriendList data={data.allFriends} />

      </div>
    )
  }

}
export default Profile
