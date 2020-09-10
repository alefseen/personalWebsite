import React from "react";
import "./About.scss";
//import Typed from "react-typed";

function About() {
  return (
    <div className="aboutContainer">
        <div className="introContent">
        <div className="backText">
        <div className="left">
          من امیر سلطانیان هستم
        </div>
        <div className="right">توسعه دهنده نرم افزار</div>
        <div className="right">بزرگ شده توی کوچه های</div>
        <div className="containBox"><span className="right">تهران،</span><span className="left"> ایران</span></div>
        <div className="left">هر سایت یه شروعی داره</div>
        <div className="right">این <span className="focusedText">شروع</span> منه!</div>
      </div>
      
        </div>
     <div className="projects">
     <span className="alert">به زودی تکمیل خواهم شد!</span>
     <a href="tel:+989388856602"><span className="phone">+989388856602</span></a>
      </div>
    </div>
  );
}

export default About;
