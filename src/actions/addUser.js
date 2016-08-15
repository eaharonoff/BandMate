function addUser(user){
  debugger
  return {
    type: 'ADD_USER',
    email: user.email,
    password: user.password,
    zip: user.zipcode
  }
  // const url = 'http://localhost:3000/users'
  // const request = axios.post(url)
  // console.log('request', request)

  // return {
  //   type: 'ADD_USER',
  //   payload: request
  // }
}
export default addUser

// middleware can block or modify the actions that are created
// before they hit the reducer
