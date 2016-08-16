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
    const {fields: {name, zipcode, email, password}, handleSubmit} = this.props;
    return (
        <form onSubmit={handleSubmit(this.otherFunc.bind(this))}>
          Name: <input type='text' placeholder='name' {...name}/>
          Zipcode: <input type='text' placeholder='zipcode' {...zipcode}/>
          Email: <input type='email' placeholder='email' {...email}/>
          Password: <input type='password' placeholder='password' {...password}/>
          <input type='submit'></input>
        </form>
    );
  }
}

export default reduxForm({
  form: 'signUp',
  fields: ['name', 'zipcode', 'email', 'password']
}, null, {addUser})(SignUp);
