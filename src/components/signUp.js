import React, { Component, PropTypes } from 'react';
import addUser from '../actions/addUser';
import { reduxForm } from 'redux-form'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SignUp extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  otherFunc(props){
    var zipcode = props.zipcode
    axios({
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyA4X16Aq4qYw7WrqcvZGzdKgeeL26E5irc`
    }).then((response) => {
        var city = response.data.results[0].formatted_address
        var user = this.props.values
        user.city = {}
        user.city.name = city
        this.props.addUser(user)
        this.context.router.push('/signup2')
      })
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

var SmartForm = reduxForm({
  form: 'signUp',
  fields: ['name', 'zipcode', 'email', 'password']
})(SignUp);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(SmartForm)
