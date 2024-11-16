import React from 'react'
// import { Nav } from '../components/Nav'
import About  from '../components/About.jsx'
import { Feature } from '../components/Feature.jsx'
import { Extension } from '../components/Extension.jsx'
import { Asked } from '../components/Asked.jsx'

export const Home = () => {
  return (
    <div> 
       <About />
       <Feature/>
       <Extension/>
       <Asked/>
    </div>
  )
}
 