import React from 'react'
import style from '../design/home.module.css'
import tablett from '../../public/images/illustration-hero.svg'

const About = () => {
  return (
    <div className={style.manager}>
        <div style={{textAlign:'left', margin:'0 auto', width:'40%'}}>
          <h1 style={{ lineHeight:'0px',fontSize:'50px', fontWeight:'600'}}>A Simple Bookmark</h1>
          <h1 style={{ fontSize:'50px', fontWeight:'600'}}>Manager</h1>
          <p style={{ marginBottom:'30px',width:'90%', color:'hsl(229, 8%, 60%)'}}>A clean and simple interface to organize your favourite website. Opera a new browser tab and see your site load instantly. Try it for free</p>
          <div className={style.buttons}>
             <button>Get in on Chrome</button>
             <button style={{backgroundColor:'white', color:'hsl(229, 8%, 60%)',boxShadow:'4px 4px 10px rgba(0, 0, 0, 0.2)'}}>Get in on Firefox</button>
          </div>
        </div>
        <div className={style.image}>
           <img src={tablett}/>
        </div>
        <div className={style.background}>
        .
        </div>
    </div>
  )
}

export default About;
