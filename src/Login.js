import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';



class Login extends Component {

  constructor(props) {
    super(props);
    console.log("sh");
    console.log(this.props);
    console.log(props);
    console.log(this.state);

    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(response) {
    console.log(this.props);
  }
    
  render() {
    return (
      <FacebookLogin
        appId= '894780907265218'
        autoLoad={true}
        fields="name,email"
        scope="public_profile"
        callback={this.responseFacebook}
      />
    );
  }
}

export default Login;
