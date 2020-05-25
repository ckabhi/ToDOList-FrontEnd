// Dumb Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './../components/users/LoginComponent';

function mapStateToProps(store) {
  return {
    loginActivity: store.loginActivity
  }
}

class Login extends Component {
  constructor() {
    super();
  
  }


  render() {
    const {
      history,
      loginActivity,
      dispatch
    } = this.props;
    console.log("Props", this.props);
    return (
      <LoginForm
        history = {history}
        loginActivity = {loginActivity}
        dispatch = {dispatch}
      />
    )
  }
}

export default connect(mapStateToProps)(Login);
