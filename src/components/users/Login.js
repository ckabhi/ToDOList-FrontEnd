import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { userLogin } from '../../actions/loginActions';

class Login extends Component {

  submitUser(values) {
    console.log("Login Values", values);
    const {
      email,
      password
    } = values;
    console.log("Email", email, password);
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password
      })
    };
    fetch('http://127.0.0.1:8081/user/entry', requestOptions)
    .then(res => res.json())
      .then(data => {
      console.log("CDM Cart Data", data);
      this.props.dispatch(userLogin(data));
    });

  }
  render (){
    const {
      loginActivity
    } = this.props;
    const { activeUser } = loginActivity || "";
    const { userObj } = activeUser || "";
    const email = userObj.username;
    console.log("Login", email, userObj);
    const SignupSchema = Yup.object().shape({
      password: Yup.string()
        .required('Password is Required')
    });
    return (
      <div>
        <Formik
          initialValues={{ email, password: '' }}
          validationSchema={SignupSchema}
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
                 <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group label-floating" style={{marginRight: "0px"}}>

                        <label className="control-label" style={{position:"absolute", left:"10px", fontWeight:"bold", fontSize:"16px", color:"#444", top:"21px"}}><i className="fas fa-key"></i></label>
                        <Field
                          type="text"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          className="form-control"
                          placeholder="Enter Your Password"
                          autoComplete="off"
                          style={{paddingLeft:"50px"}}
                        />

                    </div>
                    {errors.password && touched.password && errors.password}

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

export default Login;
