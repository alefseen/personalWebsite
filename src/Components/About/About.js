import React from "react";
import "./About.scss";
//import Typed from "react-typed";

function About() {
  return (
    <div className="aboutContainer">
      <div className="introContent">
        <div className="backText">
          <div>
            <span className="left">من امیر سلطانیان هستم</span>
          </div>
          <div>
            <span className="right">توسعه دهنده نرم افزار</span>
          </div>
          <div>
            <span className="right">بزرگ شده توی کوچه های</span>
          </div>
          <div className="containBox">
            <span className="right">
              تهران،&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            </span>
            <span className="left">
              &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; ایران
            </span>
          </div>
          <div>
            <span className="left">هر سایت یه شروعی داره</span>
          </div>
          <div>
            <span className="right">
              این <span className="focusedText">شروع</span> منه!
            </span>
          </div>
        </div>
      </div>
      <div className="projects">
        <span className="alert">به زودی تکمیل خواهم شد!</span>
        <a href="tel:+989388856602">
          <span className="phone">+989388856602</span>
        </a>
      </div>
    </div>
  );
}

export default About;
