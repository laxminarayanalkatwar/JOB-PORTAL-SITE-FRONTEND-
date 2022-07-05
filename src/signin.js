import React, { useState } from 'react'
import { signin } from './helper/auth'
import './app.css'
import { Link } from 'react-router-dom'


const Signin=()=> {
  const [value, setValues] = useState({
    email:"",
    password:"",
    error:"",
    success:"",
  })

const {email,password,error,success} = value;

const handlechange = name =>event =>{
  setValues({...value,error:false,[name]:event.target.value})
}


const errorMessage = ()=>{
  return (
    <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-danger"
              style={{ display: error ? "" : "none" }}
            >
             {error}
            </div>
          </div>
        </div>
  )
}

const successMessage = ()=>{
  return (
    <div className="row">
    <div className="col-md-6 offset-sm-3 text-left">
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New account was created successfully. Please
        <Link to="/Home"> Go To Home Page</Link>
      </div>
    </div>
  </div>
  )
}
const onSubmit = event => {
  event.preventDefault();
  setValues({ ...value, error: false });
  signin({  email, password })
    .then(data => {
      if (data.error) {
        setValues({ ...value, error: data.error, success: false });
      } else {
        setValues({
          ...value,
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    })
    .catch(console.log("Error in signup"));
};


  return (
    <div className="main">
    {errorMessage()}
    {successMessage()}
    <div className="App">
      <br />
      <h1 className="h1">Sign In to Job Portal</h1>
      <h5>Enter your Details below</h5>
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
            Sign In
          </button>
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>
  )
}

export default Signin;