import axios from 'axios'

function editUser(info){
  
  return {
    type: 'EDIT_USER',
    genre: info.genre,
    instrument: info.instrument
  }
  // const url = 'http://localhost:3000/users'
  // const request = axios.post(url)
  // console.log('request', request)

  // return {
  //   type: 'ADD_USER',
  //   payload: request
  // }
}
export default editUser