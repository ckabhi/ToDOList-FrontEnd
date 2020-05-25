import React, { Component, Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { toDoList } from '../../actions/loginActions';

class ShowToDo extends Component {
   constructor() {
      super();
      this.state = {
        edit: true
      }
      this.edit = this.edit.bind(this);
      this.delete= this.delete.bind(this);
  }
  edit() {
    this.setState({edit: false});
  }
  delete(listId, userId) {
    console.log("Delete", listId, userId);
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        listId
      })
    };
    fetch('http://127.0.0.1:8081/user/delete', requestOptions)
    .then(res => res.json())
      .then(data => {
      console.log("Edit Data", data);
      this.props.dispatch(toDoList(data));
    });
  }
  submitUser(values) {
    console.log("Login Values", values);
    const {
      userId,
      id,
      title,
      date,
      status
    } = values;
        
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        listid: id,
        title,
        date,
        status
      })
    };
    fetch('http://127.0.0.1:8081/user/edit', requestOptions)
    .then(res => res.json())
      .then(data => {
      console.log("Edit Data", data);
      this.props.dispatch(toDoList(data));
      this.setState({edit: true});
    });
  }
  render() {
   const {
      history,
      loginActivity,
      toDoData,
      match,
      dispatch
    } = this.props || {};

    const { activeUser } = loginActivity || "";
    const { userObj } = activeUser || "";
    const userId = userObj.id;
    console.log("ToDoData", userId);
    
    return (
      <div>
        <Formik
          initialValues={{userId, id: toDoData.id, title:toDoData.title, date: toDoData.date, status: toDoData.status }}
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
                         placeholder="Enter Your Full Name"
                         autocomplete="off"
                         style={{padding:"10px"}}
                         disabled={this.state.edit}
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
                          placeholder="Enter Your Password"
                          autocomplete="off"
                          style={{padding:"10px"}}
                          disabled={this.state.edit}
                        />

                    </div>

                 </div>
                 <div className="col-md-3">
                    <div className="form-group label-floating" style={{marginRight: "0px"}}>

                        <Field
                           className="form-control nopadding-r"
                           as="select"
                           name="status"
                           style={{width: "100%", border: "1px solid #9E9E9E",}}
                           disabled={this.state.edit}
                         >
                            {
                               toDoData.status ?
                                 <Fragment>
                                    <option Value="1">Completed</option>
                                    <option Value="0">Select Status</option>
                                 </Fragment>
                                 
                              :
                                 <Fragment>
                                    <option Value="0">Select Status</option>
                                    <option Value="1">Completed</option>
                                 </Fragment>
                                 
                                 
                            }
 
                         </Field>
                    </div>
         
                  </div>
                  <div className="col-md-1">
                      <button type="button" className="btn btn-lg btn-primary full-width" style={{padding:"10px"}} 
                        onClick={() => {
                              this.edit();
                            }} >
                            <i className="fas fa-edit"></i>
                      </button>                     
                  </div>
                  <div className="col-md-1">
                     <button type="submit" className="btn btn-lg btn-primary full-width" style={{padding:"10px"}}  disabled={this.state.edit}>
                        <i class="fas fa-save"></i>
                    </button>
                  </div>
                  <div className="col-md-1">
                     <button type="button" className="btn btn-lg btn-primary full-width" style={{padding:"10px"}}
                      onClick={() => {
                        this.delete(toDoData.id, userId);
                      }}
                      disabled={false}>
                        <i class="fas fa-trash-alt"></i>
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

export default ShowToDo;
