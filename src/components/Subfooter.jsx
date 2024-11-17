import React from "react";
import logo from "../assets/image/logo-bookmark copy.svg";
import face from "../../public/images/icon-facebook.svg";
import twitter from "../../public/images/icon-twitter.svg";

import style from "../design/home.module.css";

export const Subfooter = () => {
  return (
    <div>
      <div
        className={style.subfooter}
        style={{
          backgroundColor: "hsl(229, 31%, 21%)",
          height: "70px",
          margin: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={logo} />
          </div>
          <ul>
            <li style={{ color: "white", fontWeight: "400", margin: "20px" }}>
              FEATURE
            </li>
            <li style={{ color: "white", fontWeight: "400", margin: "20px" }}>
              PRICING
            </li>
            <li style={{ color: "white", fontWeight: "400", margin: "20px" }}>
              CONTACT
            </li>
          </ul>
        </div>
        <div className={style.redes}>
          <img src={face} />
          <img src={twitter} />
        </div>
      </div>
    </div>
  );
};
