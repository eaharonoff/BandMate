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
      })
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
      </div>
    );
  }
}

var SmartForm = reduxForm({
  form: 'signUp',
  fields: ['name', 'zipcode', 'email', 'password']
})(SignUp);

function mapStateToProps(state) {
  return {currentPicture: state.currentPicture}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addUser, uploadPicture}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartForm)
