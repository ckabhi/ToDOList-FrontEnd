import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Components
import Home from './../containers/Home';
import Header from './../components/Header';
import Login from './../containers/Login';
import Sidebar from '../components/Sidebar';

import './App.css';

function mapStateToProps(store) {
  return {
    loginActivity: store.loginActivity
  }
}

class App extends Component {


  render() {
    const {
      loginActivity,
      dispatch
    } = this.props;
    console.log("App Props", this.props);
    const { auth } = loginActivity || "";
    const { isLoggedIn } = auth || false;
    
    console.log("isLoggedIn", isLoggedIn)
    return (
      <BrowserRouter>
        <div id="overflow-x-wrapper">
          <Sidebar />
          <Header
            loginActivity = {loginActivity}
            dispatch = {dispatch}
          />
          {
            isLoggedIn
            ?
            <Redirect to='/home' />
            :
            <Redirect to='/login' />
          }
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}


export default connect(mapStateToProps)(App);
