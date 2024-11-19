import React from "react";
import style from "../design/home.module.css";
import chrome from "../../public/images/logo-chrome.svg";
import firefox from "../../public/images/logo-firefox.svg";
import opera from "../../public/images/logo-opera.svg";
import puntos from "../../public/images/bg-dots.svg";

export const Extension = () => {
  return (
    <div style={{ marginBottom: "220px", marginTop: "200px" }}>
      <h2 style={{ marginTop: "80px", fontWeight: "700" }}>
        Download the extension
      </h2>
      <p style={{ color: "hsl(229, 8%, 60%)", width: "36%", margin: "0 auto" }}>
        we´ve got more browsers in the pipeline. Please do let us know if you´ve
        got a favourite you´d like us to prioritize
      </p>
      <div className={style.site}>
        <div className={style.browser}>
          <img
            style={{ width: "40%", marginBottom: "20px", marginTop: "40px" }}
            src={chrome}
          />
          <p>Add to Chrome</p>
          <p style={{ color: "hsl(229, 8%, 60%)" }}>Minimun version 62</p>
          <img style={{ width: "100%" }} src={puntos} />
          <button style={{ fontSize: "14px", marginTop: "20px" }}>
            Add y install Extension
          </button>
        </div>
        <div
          className={style.browser}
          style={{ position: "relative", top: "40px" }}
        >
          <img
            style={{ width: "40%", marginBottom: "20px", marginTop: "40px" }}
            src={firefox}
          />
          <p>Add to Firefox</p>
          <p style={{ color: "hsl(229, 8%, 60%)" }}>Minimun version 55</p>
          <img style={{ width: "100%" }} src={puntos} />
          <button style={{ fontSize: "14px", marginTop: "20px" }}>
            Add y install Extension
          </button>
        </div>
        <div
          className={style.browser}
          style={{ position: "relative", top: "80px" }}
        >
          <img
            style={{ width: "40%", marginBottom: "20px", marginTop: "40px" }}
            src={opera}
          />
          <p>Add to Opera</p>
          <p style={{ color: "hsl(229, 8%, 60%)" }}>Minimun version 46</p>
          <img style={{ width: "100%" }} src={puntos} />
          <button style={{ fontSize: "14px", marginTop: "20px" }}>
            Add y install Extension
          </button>
        </div>
      </div>
    </div>
  );
};
