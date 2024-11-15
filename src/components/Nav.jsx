import React from 'react'
import style from  '../design/home.module.css'
import logo from '../assets/image/logo-bookmark.svg';


export const Nav = () => {
  return (
    <div className= {style.menu} >
        <div>
          <img src={logo} />
        </div>
     <nav className= {style.submenu} >
        <p>FEATURES</p>
        <p>PRICING</p>
        <p>CONTACT</p>
        <p style={{backgroundColor:'hsl(0, 94%, 66%)', borderRadius:'5px', width:'100%', color:'white'}}>LOGIN</p>
     </nav>
    </div>
  )
}