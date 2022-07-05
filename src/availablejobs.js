import React, { useEffect, useState } from 'react'
import { job } from './helper/auth'
import './app.css'
import axios from 'axios'
import Card from './card'
import { API } from './backend'


const  Availablejobs=()=> {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);


  const loadAllProduct = () => {
    job().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
        console.log(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);
 


  return (
    
       <div>
        <h1 className='title'> Welcome  </h1>
        <h5 className='k'> Apply For Jobs </h5>
    <div  className='row'>
    <div className='col-4'>
    <Card/>
    </div> 
 <div className='col-4'>
 
 </div>
  <div className='col-4'>
 
 </div>
  {/* {posts.map((post,index)=>{
//   return (
//     <div key={index} className='col-4 mb-4'>
//    <Card  post={post}/> 
//     </div>
//   )
//  })} */}
   </div>
 </div>
  )
}

export default Availablejobs;