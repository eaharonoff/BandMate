function addUser(user){

  return {
    type: 'ADD_USER',
    name: user.name,
    zip: user.zipcode,
    email: user.email,
    password: user.password
  }
}
export default addUser
