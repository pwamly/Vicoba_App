import React from "react";
import ReactDOM from "react";
import './header.css';
import pic from'../logo.jpg';

const Header=()=>{
  return (
   <div id="header"><img src={pic} id='avt'  />  
</div>
  )
 }

 export default Header;