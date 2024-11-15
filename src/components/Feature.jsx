import React from 'react'
import style from '../design/home.module.css'

export const Feature = () => {
  return (
    <div className={style.features}>
       <h2 style={{marginTop:'80px', fontWeight:'700'}}>Features</h2>
       <p style={{width:'35%', margin:'0 auto', color:'hsl(229, 8%, 60%)'}}>Our aim is to make it quick and easy for you to acces your
        favourite website. Your bookmarks sync beetwen your devices so you can acces them on the go</p>
    </div>
  )
}
