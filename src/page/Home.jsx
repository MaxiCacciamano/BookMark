import React from "react";
// import { Nav } from '../components/Nav'
import About from "../components/About.jsx";
import { Feature } from "../components/Feature.jsx";
import { Extension } from "../components/Extension.jsx";
import { Asked } from "../components/Asked.jsx";
import { Footer } from "../components/footer.jsx";

import style from "../design/home.module.css";
import { Nav } from "../components/Nav.jsx";

export const Home = () => {
  return (
    <div className={style.home}>
      <Nav />
      <About />
      <Feature />
      <Extension />
      <Asked />
    </div>
  );
};
