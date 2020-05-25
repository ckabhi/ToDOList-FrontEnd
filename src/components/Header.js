import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import { userLogout } from './../actions/loginActions';


function mapStateToProps(store) {
  return {
    auth: store.auth
  
  }
}

class Header extends Component {
  constructor() {
    super();

    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    this.props.dispatch(userLogout());
    localStorage.removeItem('socialReduxState');
  }
  render() {

    return (
        <header className="header header--logout" id="site-header">
            <div className="header-content-wrapper">
               <a href="#" className="side-menu-open" data-toggle="modal" data-target="#registration-login-form-popup" onClick={() => this.logOut()} >
                 <i className="fas fa-power-off" style={{color: "white", padding: "20px", fontSize: "30px"}}></i>
               </a>
              
               <div className="fixed-sidebar right">
                  <a href="#" className="side-menu-open js-sidebar-open">
                     <i className="fas fa-sign-out-alt"></i>

                  </a>
                  <div className="fixed-sidebar-right" id="sidebar-right">
                     <div id="profile-panel-responsive" className="mCustomScrollbar ps ps--theme_default" data-mcs-theme="dark"></div>
                  </div>
               </div>
            </div>
         </header>
    )
  }
}

export default connect(mapStateToProps)(Header);
