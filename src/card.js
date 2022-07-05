import React, { useState } from 'react'
import { API } from './backend'
import "./app.css"
import { Link } from 'react-router-dom'

const Card =() =>{

 

 const onSubmit = ()=>{
  return (
    alert("Successfully Applied for this Job")
  )
 }

  return (
    <div>
    <div className="card text-white bg-dark border border-info ">
    <div className='headline'>
    <div className="card-header lead text-center">Future See</div>
    </div>
    <div className="card-body">
      </div>
      <div className='row-2'>
     <h5> Position = <span className='z'> software intern</span>  </h5>
     <h5> Salery =    <span className='z'> 35000</span>  </h5>
     <h5> Skill  =   <span className='z'>MERN STACK </span>  </h5>
     <h5> Job Description   =  <span className='z'> Work ON WEB3 Product </span>  </h5>
     </div>
      <div className="row-1">
        <div className="col-12">
          <button
            onClick={onSubmit}
            className=" btn btn-block btn-outline-success mt-2 mb-2"
          >
            Applied For Job
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card