// Dumb Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowToDo from '../components/toDoList/showToDo';
import AddToDo from '../components/toDoList/AddToDo';
import { toDoList } from './../actions/loginActions';

function mapStateToProps(store) {
   return {
     loginActivity: store.loginActivity,
     toDoList: store.toDolist
   }
 }

class Home extends Component {
   constructor() {
      super();
  }

  componentWillMount() {
   const {
      loginActivity,
      dispatch,
      history
    } = this.props;
    console.log("App Props", this.props);
    const { auth } = loginActivity || "";
    const { userObj } = auth || "";
    const { isLoggedIn } = auth || false;
    if(isLoggedIn == false) {
      history.push('/login');
    }
  }

  componentDidMount() {
   const {
      loginActivity
    } = this.props;
    const {
      activeUser
    } = loginActivity;
    const {
      userObj
    } = activeUser;
    const {
       id,
       token
    } = userObj;
    console.log("Email", id);
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      },
      body: JSON.stringify({
        userid: id
      })
    };
    
    fetch('http://127.0.0.1:8081/user/lists', requestOptions)
    .then(res => res.json())
      .then(data => {
      console.log("CDM Cart Data", data);
      this.props.dispatch(toDoList(data));
      console.log("Props in Home", this.props);
    });
  }
  render() {
   const {
      history,
      loginActivity,
      toDoList,
      match,
      dispatch
    } = this.props;

    const {
       listObj
    } = toDoList || [];

   const showTODoList = listObj.map((data) => {
      return (
         <ShowToDo 
            toDoData={data}
            toDoList={toDoList}
            history = {history}
            loginActivity = {loginActivity}
            match = {match}
            dispatch = {dispatch}
            key={data.id}
         />
      );
   });

    console.log("Home Props", this.props, listObj);
    return (
      <div id="content" className="site-content hfeed site">
            <div id="youzer">
               <div id="buddypress" className="youzer yz-page noLightbox yz-horizontal-layout yz-global-wall yz-tabs-list-gray yz-crimson-scheme yz-page-btns-border-radius">
                  <div className="yz-content">
                     <main className="yz-page-main-content col-md-12">
                        <div className="col-md-12">
                           {showTODoList}
                           <AddToDo 
                              toDoList={toDoList}
                              history = {history}
                              loginActivity = {loginActivity}
                              match = {match}
                              dispatch = {dispatch}
                           />
                        </div>
                     </main>
                  </div>
               </div>
            </div>
         </div>
    )
  }
}

export default connect(mapStateToProps)(Home);
