import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import './app.css'
import { signin, signup } from './helper/auth';


const Login = () =>{

  const [values, setValues] = useState({
   
    email:"",
    password:"",
    error:"",
    success:"",
   
  })


  const {name , email, password,error,success,didredirect}= values;


    const handlechange = name =>event =>{
      setValues({...values,error:false,[name]:event.target.value})
    }
  
  
    const successMessage = () => {
      return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-success"
              style={{ display: success ? "" : "none" }}
            >
              New account was created successfully. Please
              <Link to="/signin">Login Here</Link>
            </div>
          </div>
        </div>
      );
    };

    const performredirect = ()=>{
      if(didredirect){
        return <Redirect to="/Home"/>
      }
    }
  
    
    const errorMessage = () => {
      return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-danger"
              style={{ display: error ? "" : "none" }}
            >
             Error In Login! 
            </div>
          </div>
        </div>
      );
    };
  
    const onSubmit = event => {
      event.preventDefault();
      setValues({ ...values, error: false });
      signup({ name, email, password })
        .then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error, success: false });
          } else {
            setValues({
              ...values,
              name: "",
              email: "",
              password: "",
              error: "",
              success: true,
              didredirect:true
            });
          }
        })
        .catch(console.log("Error in signup"));
    };

  return (
        <div className="main">
          {errorMessage()}
          {successMessage()}
          {performredirect()}
          <div className="App">
            <br />
            <h1 className="h1">Log In to Job Portal</h1>
            <h5>Enter your Details below</h5>
            <div className="email">
              <h5>Name</h5>
              <input
                class="form-control"
                placeholder="Name"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={handlechange("name")}
                type="text"
                value={name}
              /> 
            </div>
            <div className="email">
              <h5>EMAIL</h5>
              <input
                class="form-control"
                placeholder="Email address"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={handlechange("email")}
                type="email"
                value={email}
              />
              <br />
              <h5 className="h5">PASSWORD</h5>
              <input
                type="password"
                class="form-control"
                onChange={handlechange("password")}
                placeholder="Password"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                value={password}
              />
            </div>
            <br />
            <div className="pass">
              <div className="pass d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button" onClick={onSubmit}  >
                  Log In
                </button>
              </div>
            </div>
            <br />
            <br />
            <div className="footer">
              <h5>
                Don't have an account? <a href="/signin">Sign In</a>
              </h5>
            </div>
          </div>
        </div>
      )
}

export default Login;
