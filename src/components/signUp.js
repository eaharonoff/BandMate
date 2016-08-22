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
      <div>
        <div id='errors'>
        </div>
        <div className='container'>
          <form onSubmit={handleSubmit(this.otherFunc.bind(this))}>
           <div className="col-lg-12">
              <label className="col-sm-2 col-form-label">Name:</label>
              <input type='text' className='form-control form-control-lg' placeholder='name' required {...name}/>
            </div>
            <div className="col-lg-12">
              <label className="col-sm-2 col-form-label">City/State or Zipcode:</label>
              <input type='text' className='form-control form-control-lg' placeholder='zipcode' required {...zipcode}/>
            </div>
           <div className="col-lg-12">
              <label className="col-sm-2 col-form-label">Email: </label>
              <input type='email' className='form-control form-control-lg' placeholder='email' {...email}/>
            </div>
           <div className="col-lg-12">
              <label className="col-sm-2 col-form-label">Password: </label>
              <input type='password' className='form-control form-control-lg' placeholder='password' required {...password}/>
            </div>
            <div className="col-lg-6">
            <input className='btn btn default' type='submit' value='Sign Up'></input>
            </div>
          </form>
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
  return bindActionCreators({addUser, uploadPicture}, dispatch)
}

export default connect(null, mapDispatchToProps)(SmartForm)
