import React from 'react'
import style from  '../design/home.module.css'
import logo from '../../public/images/logo-bookmark.svg';


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
        <p>LOGIN</p>
     </nav>
    </div>
  )
}
