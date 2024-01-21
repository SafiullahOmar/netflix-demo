import React, { useEffect, useState } from 'react'
import img from "./netlfix_img.jpeg";
import usr_img from  "./usr.png";
import  "./nav.css";

function Nav() {

  const [show,handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
          handleShow(true);
      }else{
          handleShow(false);
      }
      return ()=>{
        window.removeEventListener("scroll");
      }
    });
  },[]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img src={img}  className="nav_logo" alt="netflix"/>
        <img src={usr_img}  className="nav_user" alt="avatar"/>
    </div>
  )
}

export default Nav