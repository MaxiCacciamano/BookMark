import React from 'react'
import style from '../design/home.module.css'
import tablett from '../../public/images/illustration-hero.svg'

const About = () => {
  return (
    <div className={style.manager}>
        <div style={{textAlign:'left', margin:'0 auto', width:'40%'}}>
          <h1 style={{ lineHeight:'0px',fontSize:'40px', fontWeight:'600'}}>A Simple Bookmark</h1>
          <h1 style={{ fontSize:'40px', fontWeight:'600'}}>Manager</h1>
          <p style={{ marginBottom:'30px',width:'90%'}}>A clean and simple interface to organize your favourite website. Opera a new browser tab and see your site load instantly. Try it for free</p>
          <button>Get in on Chrome</button>
          <button>Get in on Firefox</button>
        </div>
        <div className={style.image}>
        <img src={tablett}/>
        </div>
    </div>
  )
}

export default About;
