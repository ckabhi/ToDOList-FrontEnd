import React, { Component } from 'react';

import Step1Form from './Step1Form';
import Register from './Register';
import Login from './Login';

class LoginBox extends Component {

  render() {
    const {
      history,
      loginActivity,
      dispatch
    } = this.props;
    console.log("loginActivity", loginActivity);
    return (
      <div id="content" className="site-content hfeed site">
            <div id="primary" className="container-fluid">
               <div className="row primary-content-wrapper">
                  <main id="main" className="col-md-12 col-sm-12 col-lg-12">
                     <article id="post-299" className="post-299 page type-page status-publish hentry">
                        <div className="page-content">
                           <div className="row section-theme-padding vc_custom_1540991787497 vc_column-gap-10 inner-relative-wrapper">
                              <div className="container">
                                 <div className="row-cols-wrap vc_row wpb_row vc_row-fluid vc_row-o-full-height vc_row-o-columns-stretch vc_row-o-equal-height vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                                    <div className="content-bg-wrap content-bg-wrap-row " ></div>
                                    <div className="wpb_column vc_column_container vc_col-sm-5">
                                       <div className="vc_column-inner">
                                          <div className="wpb_wrapper">
                                             <div className="wpb_text_column wpb_content_element text-white" >
                                                <div className="wpb_wrapper">
                                                   <h1 className="text-white">The Most Complete Social Network is Here!</h1>
                                                </div>
                                             </div>
                                             <div className="wpb_text_column wpb_content_element text-white" >
                                                <div className="wpb_wrapper">
                                                   <p>We are the best and biggest social network with 5 billion active users all around the world. Share your thoughts, write blog posts, show your favourite music, earn badges and much more!</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-offset-1">
                                       <div className="vc_column-inner">
                                          <div className="wpb_wrapper">
                                             <div className="registration-login-form mb-0 crumina-sign-form-container selected-forms-login selected-forms-single visible">
                                                <div className="tab-content">
                                                   <div className="tab-pane" id="login-panel-3125" role="tabpanel" style={{display: "block"}}>
                                                      <div className="title h6">Connect to your Account</div>
                                                      {
                                                        loginActivity.auth.isPassword
                                                        ?
                                                          loginActivity.auth.isSignUp
                                                          ?
                                                            <Register
                                                              history = {history}
                                                              loginActivity = {loginActivity}
                                                   
                                                              dispatch = {dispatch}
                                                            />
                                                          :
                                                            <Login
                                                              history = {history}
                                                              loginActivity = {loginActivity}
                                                            
                                                              dispatch = {dispatch}
                                                            />
                                                        :
                                                          <Step1Form
                                                            history = {history}
                                                            loginActivity = {loginActivity}
                                                            dispatch = {dispatch}
                                                          />
                                                      }
                                          
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </article>
                  </main>
               </div>
            </div>
         </div>
    )
  }
}

export default LoginBox;
