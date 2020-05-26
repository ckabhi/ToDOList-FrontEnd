import React, { Component, Fragment } from 'react';
import { Formik, Form, Field, isEmptyArray } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf, faStar as faBlankStart } from '@fortawesome/free-regular-svg-icons';
import { toDoList, toDOListAdd } from '../../actions/loginActions';

class AddToDo extends Component {
   constructor() {
      super();
  }
  
  submitUser(values) {
    console.log("Login Values", values);
    const {
      userId,
      title,
      date,
      status
    } = values;
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        title,
        date,
        status
      })
    };
    fetch('http://127.0.0.1:8081/user/add', requestOptions)
    .then(res => res.json())
      .then(data => {
      console.log("Edit Data", data);

      this.props.dispatch(toDOListAdd(data));
    });
  }
  render() {
   const {
      history,
      loginActivity,
      match,
      dispatch
    } = this.props || {};

    const { activeUser } = loginActivity || {};
  
    const { userObj } = activeUser || {};
    const userId = userObj.id;
      
    console.log("ToDoData", userId);
    
    
    return (
      <div>
        <Formik
          initialValues={{userId, title: "", date: "", status: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Formik", values);
            this.submitUser(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="content crumina-sign-form-login crumina-sign-form">
              <div className="row">
                 <div className="col-md-3">
                   <div className="form-group label-floating" style={{marginRight: "0px"}}>

                       <Field
                         type="text"
                         name="title"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.title}
                         className="form-control"
                         placeholder="Enter Title"
                         autocomplete="off"
                         style={{padding:"10px"}}
                         
                       />

                   </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group label-floating" style={{marginRight: "0px"}}>

                        <Field
                          type="text"
                          name="date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.date}
                          className="form-control"
                          placeholder="Enter Date"
                          autocomplete="off"
                          style={{padding:"10px"}}
                          
                        />

                    </div>

                 </div>
                 <div className="col-md-3">
                    <div className="form-group label-floating" style={{marginRight: "0px"}}>

                        <Field
                           className="form-control nopadding-r"
                           component="select"
                           name="status"
                           style={{width: "100%", border: "1px solid #9E9E9E",}}
                           onChange={e => {
                             handleChange(e);
                           }}
                           
                         >
                            <option defaultValue="false">Select Status</option>
                            <option defaultValue="true">Completed</option>
 
                         </Field>
                    </div>
         
                  </div>
                  
                  <div className="col-md-3">
                     <button type="submit" className="btn btn-lg btn-primary full-width" style={{padding:"10px"}} disabled={false}>
                        <i class="fas fa-save"></i> Add ToDo List
                    </button>
                  </div>
                  
              </div>

            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default AddToDo;
