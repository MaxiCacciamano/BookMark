import React from "react";
import style from "../design/home.module.css";

export const More = ({ title }) => {
  return (
    <div>
      <button className={style.moreInfo}>{title}</button>
    </div>
  );
};
