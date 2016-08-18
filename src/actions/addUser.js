function addUser(user){
  return {
    type: 'ADD_USER',
    name: user.name,
    city: user.city,
    email: user.email,
    password: user.password
  }
}
export default addUser
