import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createjob } from './helper/auth'
import "./job.css"



const Job=()=> {
  const [values, setValues]= useState({
    companyname:"",
    Position:"",
    salery:"",
    skill:"",
    jobdescription:"",
    error:"",
    success:""

  })


const { companyname,Position,salery,skill,jobdescription,error,success} = values;


const handlechange = name =>event =>{
  setValues({...values,error:false,[name]:event.target.value})
}



const onSubmit = event => {
  event.preventDefault();
  setValues({ ...values, error: false });
  createjob({ companyname, Position,salery,skill, jobdescription})
    .then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          companyname:"",
          Position:"",
         salery:"",
         skill:"",
         jobdescription:"",
          error: "",
          success: true,
        });
      }
    })
    .catch(console.log("Error in signup"));
};


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
        Successfully Post Job . Please
        <Link to="/Availablejobs">  Check</Link>
        <br/>
        Go To Home Page
        <Link to="/Home">  Here</Link>
      </div>
    </div>
  </div>

  )
}


  return (
    <div>
      {successMessage()}
      {errorMessage()}
      <h1 className='post'>
        Post Job
      </h1>
      <input className='A'  type="text" value={companyname} onChange={handlechange("companyname")} placeholder='Company Name '/>
      <input className='A'  type="text" value={Position} onChange={handlechange("Position")} placeholder='Position '/>
      <input className='A' type="number" value={salery} onChange={handlechange("salery")} placeholder='SALERY '/>
      <input className='A' type="text" value={skill} onChange={handlechange("skill")} placeholder='SKILL'/>
      <input className='A' type="text" value={jobdescription} onChange={handlechange("jobdescription")} placeholder='JOB DESCRIPTION '/>
   
      <div >
        <button  className='btnn' type='button' onClick={onSubmit}>POST</button>
      </div>
    </div>
  )
}

export default Job;