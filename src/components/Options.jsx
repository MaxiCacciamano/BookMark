import React, { useState } from "react";
import { More } from "../assets/More";

import desktop from "../../public/images/illustration-features-tab-1.svg";
import table from "../../public/images/illustration-features-tab-2.svg";
import mobile from "../../public/images/illustration-features-tab-3.svg";

import style from "../design/home.module.css";

export const Options = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className={style.options} style={{ margin: "50px" }}>
      <div
        className={style.tab}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <a
          style={{
            cursor: "pointer",
            // margin: "50px",
            borderBottom: "1px solid hsl(229, 8%, 60%)",
            padding: "20px 40px 20px 40px",
            color: "hsl(229, 8%, 60%)",
            // alignItems: "center",
            // width: "80%",
          }}
          onClick={() => setActiveTab("tab1")}
        >
          Simple Bookmarking
        </a>
        <a
          style={{
            cursor: "pointer",
            // margin: "50px",
            borderBottom: "1px solid hsl(229, 8%, 60%)",
            padding: "20px 40px 20px 40px",
            color: "hsl(229, 8%, 60%)",
            // alignItems: "center",
            // width: "80%",
          }}
          onClick={() => setActiveTab("tab2")}
        >
          Speedy Searching
        </a>
        <a
          style={{
            cursor: "pointer",
            // margin: "50px",
            borderBottom: "1px solid hsl(229, 8%, 60%)",
            padding: "20px 40px 20px 40px",
            color: "hsl(229, 8%, 60%)",
            // alignItems: "center",
            // width: "80%",
          }}
          onClick={() => setActiveTab("tab3")}
        >
          Easy Sharing
        </a>
      </div>

      <div>
        {activeTab === "tab1" && (
          <div
            className={style.activee}
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "60px auto",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <img
                src={desktop}
                style={{
                  height: "100%",
                  margin: "0 auto",
                }}
              />
            </div>
            <div
              style={{
                width: "50%",
                marginLeft: "80px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2 style={{ textAlign: "left" }}>Bookmark in one click</h2>
              <p
                style={{
                  textAlign: "left",
                  width: "60%",
                  color: "hsl(229, 8%, 60%)",
                }}
              >
                Organize your book marks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  marginTop: "30px",
                }}
              >
                <More title="More info" />
              </div>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "30px auto",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <img
                src={table}
                style={{
                  height: "100%",
                  margin: "0 auto",
                }}
              />
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2 style={{ textAlign: "left" }}>Bookmark in one click</h2>
              <p
                style={{
                  textAlign: "left",
                  width: "60%",
                  color: "hsl(229, 8%, 60%)",
                }}
              >
                Organize your book marks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  marginTop: "30px",
                }}
              >
                <More title="More info" />
              </div>
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "60px auto",
              marginLeft:'40px'
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <img
                src={mobile}
                style={{
                  height: "100%",
                  margin: "0 auto",
                }}
              />
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
              }}
            >
              <h2 style={{ textAlign: "left" }}>Bookmark in one click</h2>
              <p
                style={{
                  textAlign: "left",
                  width: "60%",
                  color: "hsl(229, 8%, 60%)",
                }}
              >
                Organize your book marks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  marginTop: "30px",
                }}
              >
                <More title="More info" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={style.background2}>.</div>
    </div>
  );
};
