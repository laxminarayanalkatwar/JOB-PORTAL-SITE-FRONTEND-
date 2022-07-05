import React from "react";
import './nav.css'
import imm1 from "./Images/job_search_portals.png"

 const Home = ()=>{
    return(
        <div>
        <nav>  
         <ul>
            <li class="logo" >Job Portal</li>
            <li class="btn"><span class="fas fa-bars"></span></li>
            <div class="items">
               <li><a href="/Job">Post Job</a></li>
               <li><a href="https://cryptonaukri.com/aboutus">About</a></li>
               <li><a href="/availablejobs">Available Job</a></li>
               <li><a href="/signin">SignIn</a></li>
            </div>
            <li class="search-icon">
               <input type="search" placeholder="Search"/>
               <label class="icon">
               <span class="fas fa-search"></span>
               </label>
            </li>
         </ul>
      </nav>
      <div >
        <img className="photo" src={imm1} alt="job portal imagage" />
      </div>
      <div>

      </div>
      <div>
        <hr className="h"></hr>
      </div>
      <div className="footerr" >
       <ul className="f2">
        <h1>Support</h1>

        <li className="f3">Contact Us</li>
        <li className="f3">Privcay Policy</li>
        <li className="f3">DCMA</li>
        <li className="f3">Terms and Conditions</li>
       </ul>
      </div>
      <div className="p">
        <h5>2022@Founded</h5>
      </div>
      </div>
      
    )
 }
 export default Home;
