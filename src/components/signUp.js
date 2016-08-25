import React, { Component, PropTypes } from 'react';
import addUser from '../actions/addUser';
import { reduxForm } from 'redux-form'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uploadPicture from '../actions/uploadPicture'

class SignUp extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  otherFunc(props){
    var zipcode = props.zipcode
    if (zipcode.length < 5) {
      document.getElementById('errors').innerHTML = '<p>Sorry, this is not a valid entry.</p>'
    } else {
      axios({
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyA4X16Aq4qYw7WrqcvZGzdKgeeL26E5irc`
      }).then((response) => {
          var city = response.data.results[0].formatted_address
          var user = this.props.values
          var picture = this.props.currentPicture
          user.city = {}
          user.city.name = city
          user.picture = picture
          this.props.addUser(user)
          this.context.router.push('/signup2')
        }).catch(error => {
          document.getElementById('errors').innerHTML = '<p>Sorry, this is not a valid entry.</p>'
        })
      }
    }

  render() {
    const {fields: {name, zipcode, email, password}, handleSubmit} = this.props;
    return (
      <div className='container'>
        <div id='errors'></div>
          <form className='col-centered' onSubmit={handleSubmit(this.otherFunc.bind(this))}>
              <label >Name:</label>
              <input type='text' className='form-control' placeholder='name' required {...name}/><br />
              <label >City/State:</label>
              <input type='text' className='form-control' placeholder='City/State' required {...zipcode}/><br />
              <label >Email: </label>
              <input type='email' className='form-control' placeholder='email' {...email}/>
              <label >Password: </label>
              <input type='password' className='form-control' placeholder='password' required {...password}/><br />
            <center>
            <input className='btn' type='submit' value='Sign Up'></input>
            </center>
          </form>
      </div>
    );
  }
}

var SmartForm = reduxForm({
  form: 'signUp',
  fields: ['name', 'zipcode', 'email', 'password']
})(SignUp);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addUser, uploadPicture}, dispatch)
}

export default connect(null, mapDispatchToProps)(SmartForm)
