function editUser(info){

  return {
    type: 'EDIT_USER',
    genres: info.genres,
    instruments: info.instruments
  }

}
export default editUser
