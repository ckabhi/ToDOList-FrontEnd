import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { userLogin } from './../../actions/loginActions';

class Step1Form extends Component {

  submitUser(value) {
    const {
      email
    } = value;
    console.log("Email", email);
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email
      })
    };
    fetch('http://127.0.0.1:8081/user/checkuser', requestOptions)
    .then(res => res.json())
      .then(data => {
      console.log("CDM Cart Data", data);
      this.props.dispatch(userLogin(data));
    });
  }
  
  render (){
    const SignupSchema = Yup.object().shape({
      email: Yup.string()
        .required('Email is Required')
    });
    return (
      <div>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
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
                 <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">

                    <div className="form-group label-floating" style={{marginRight: "0px"}}>

                        <label className="control-label" style={{position:"absolute", left:"10px", fontWeight:"bold", fontSize:"16px", color:"#444", top:"21px"}}><i className="fas fa-envelope-square"></i></label>
                        <Field
                          type="text"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className="form-control"
                          placeholder="Enter Email"
                          autoComplete="off"
                          style={{paddingLeft:"50px"}}
                        />

                    </div>
                    {errors.email && touched.email && errors.email}

                    <button type="submit" className="btn btn-lg btn-primary full-width" disabled={false}>
                      Submit
                    </button>
                 </div>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    );

  }
}

export default Step1Form;
