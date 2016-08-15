import React, { Component, PropTypes } from 'react';
import addUser from '../actions/addUser';
import { reduxForm } from 'redux-form'


class SignUp extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  otherFunc(props){
    this.props.addUser(props)
    this.context.router.push('/signup2')
  }


  render() {
    const {fields: {email, password, zipcode}, handleSubmit} = this.props;
    return (
        <form onSubmit={handleSubmit(this.otherFunc.bind(this))}>
          Email: <input type='email' placeholder='your email' {...email}/>
          Password: <input type='password' placeholder='password' {...password}/>
          Zip Code: <input type='text' placeholder='your zip' {...zipcode}/>
          <input type='submit'></input>
        </form>
    );
  }
}

export default reduxForm({
  form: 'signUp',
  fields: ['email', 'password', 'zipcode']
}, null, {addUser})(SignUp);
