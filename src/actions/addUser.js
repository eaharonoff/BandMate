function addUser(user){
  return {
    type: 'ADD_USER',
    name: user.name,
    city: user.city,
    email: user.email,
    password: user.password,
    picture: user.picture
  }
}
export default addUser
