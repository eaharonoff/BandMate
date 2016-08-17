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

  dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  drop(e) {
    e.stopPropagation();
    e.preventDefault();

    var dt = e.dataTransfer
    var files = dt.files
    debugger
  }

  componentDidMount() {
    var dropbox = document.getElementById("dropbox")
    dropbox.addEventListener("dragenter", this.dragenter, false);
    dropbox.addEventListener("dragover", this.dragover, false);
    dropbox.addEventListener("drop", this.drop, false);
  }

  render() {

    const {fields: {name, zipcode, email, password}, handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.otherFunc.bind(this))}>
          Name: <input type='text' placeholder='name' {...name}/>
          Zipcode: <input type='text' placeholder='zipcode' {...zipcode}/>
          Email: <input type='email' placeholder='email' {...email}/>
          Password: <input type='password' placeholder='password' {...password}/>
          <input type='submit'></input>
        </form>
        <div id="dropbox">
          <h1>hey</h1>
          <h1>wassup</h1>
          <h1>girl</h1>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signUp',
  fields: ['name', 'zipcode', 'email', 'password']
}, null, {addUser})(SignUp);
