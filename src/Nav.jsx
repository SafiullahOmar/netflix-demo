import React from 'react'
import img from "./netlfix_img.jpeg";
import usr_img from  "./usr.png";

function Nav() {
  return (
    <div className='nav'>
        <img src={img}  className="nav_logo" alt="netflix"/>
        <img src={usr_img}  className="nav_avatar" alt="avatar"/>
    </div>
  )
}

export default Nav