import React from "react";
import style from "../design/home.module.css";

export const Footer = () => {
  return (
    <div>
      <div className={style.footer}>
        <p>35.000 + ALREADY JOINED</p>
        <h2>Stay up-to-date with what we're doing</h2>
        <div
          style={{
            margin: "30px",
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input placeholder="Enter your email adress" />
          <button style={{ backgroundColor: "hsl(0, 94%, 66%)" }}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
