import React, { useState } from "react";
import arrow from "../../public/images/icon-arrow.svg";
import style from "../design/home.module.css";

export const Desplegar = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={style.arrow}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontWeight: "500" }}>{title}</p>
          <button onClick={togleSection} className={style.styleArrow}>
            {isOpen ? <img src={arrow} /> : <img src={arrow} />}
          </button>
        </div>
        {isOpen && <p style={{}}>{content}</p>}
      </div>
    </div>
  );
};
