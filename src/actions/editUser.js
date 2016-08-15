import axios from 'axios'

function editUser(info){

  return {
    type: 'EDIT_USER',
    genre: info.genre,
    instrument: info.instrument
  }

}
export default editUser
