import React from 'react'
import BasicsContainer from './basicsContainer'
import FriendList from './friendList'
import SendMessageButton from './sendMessageButton'

const Profile = ({data, notCurrentUser}) => {
  if (notCurrentUser) {
    return (
      <div>
        <BasicsContainer data={data}/>
        <SendMessageButton user={data} />
        <div>Bio: {data.bio}</div>
        <div dangerouslySetInnerHTML={{__html: data.soundcloud}} />
      </div>
    )
  } else {
    return (
      <div>
        <BasicsContainer data={data}/>
        <div>Bio: {data.bio}</div>
        <div> Add a soundcloud: </div>
        <div dangerouslySetInnerHTML={{__html: data.soundcloud}} />
        <FriendList data={data.allFriends} />
      </div>
    )
  }

}
export default Profile
