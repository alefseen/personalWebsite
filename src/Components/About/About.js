import React, { useState, useEffect } from "react";
import "./About.scss";
//import Typed from "react-typed";
import ScrollTrigger from "react-scroll-trigger";
import { Controls, PlayState, Tween } from "react-gsap";
import BezierEasing from "bezier-easing";
import { SocialIcon } from "react-social-icons";
function About() {
  const [elementsView, setElementsView] = useState({
    main: null,
    landing: null,
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    setElementsView((prevState) => ({
      ...prevState,
      main: window.scrollY > 5,
    }));
  };
  const handleEnter = (n) => {
    setElementsView((prevState) => ({ ...prevState, [n]: true }));
  };
  const handleExit = (n) => {
    setElementsView((prevState) => ({ ...prevState, [n]: false }));
  };
  const TweenLeft = {
    from: { left: "50%", x: "-50%" },
    to: { left: "0%", x: "0%" },
  };
  const TweenRight = {
    from: { left: "50%", translateX: "-50%" },
    to: { left: "100%", x: "-100%" },
  };
  const TweenOptions = {
    duration: 1,
    ease: BezierEasing(1, 0, 0.25, 1),
    playState:
      elementsView.main == null
        ? PlayState.pause
        : elementsView.main
        ? PlayState.play
        : PlayState.reverse,
  };
  return (
    <div className="aboutContainer">
      <div className="introContent">
        <div className="backText">
          <div>
            <Tween {...TweenOptions} {...TweenLeft} delay="0">
              <span>من امیر سلطانیان هستم</span>
            </Tween>
          </div>
          <div>
            <Tween {...TweenOptions} {...TweenRight} delay=".1">
              <span>توسعه دهنده نرم افزار</span>
            </Tween>
          </div>
          <div>
            <Tween {...TweenOptions} {...TweenRight} delay=".2">
              <span>بزرگ شده توی کوچه های</span>
            </Tween>
          </div>
          <div className="containBox">
            <Tween {...TweenOptions} {...TweenRight} delay=".25">
              <span>تهران،&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</span>
            </Tween>
            <Tween {...TweenOptions} {...TweenLeft} delay=".25">
              <span>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; ایران</span>
            </Tween>
          </div>
          <div>
            <Tween {...TweenOptions} {...TweenLeft} delay=".15">
              <span>هر سایت یه شروعی داره</span>
            </Tween>
          </div>
          <div>
            <Tween {...TweenOptions} {...TweenRight} delay=".05">
              <span>
                این <span className="focusedText">شروع</span> منه!
              </span>
            </Tween>
          </div>
        </div>
      </div>
      <div className="projects">
        <ScrollTrigger
          onEnter={() => {
            handleEnter("landing");
          }}
          onExit={() => handleExit("landing")}
        >
          <Tween
            ease={BezierEasing(1, 0, 0.25, 1)}
            from={{
              opacity: "0",
              filter: "blur(10px)",
              backgroundSize: "1px 200px",
            }}
            to={{
              filter: "blur(0px)",
              opacity: "1",
              backgroundSize: "1500px 0px",
            }}
            playState={
              elementsView.landing == null
                ? PlayState.pause
                : elementsView.landing
                ? PlayState.play
                : PlayState.reverse
            }
            duration={2}
            delay={0}
          >
            <span className="alert">به زودی تکمیل خواهم شد!</span>
          </Tween>
        </ScrollTrigger>
        <Tween
          ease={BezierEasing(1, 0, 0.25, 1)}
          from={{
            y: "-70px",
            "z-index": -1,
            width: "50%",
            "text-align": "center",
            background: "#4ab06e",

          }}
          to={{
            width: "auto",
            background: "transparent",
            y: 0,
          }}
          playState={
            elementsView.landing == null
              ? PlayState.pause
              : elementsView.landing
              ? PlayState.play
              : PlayState.reverse
          }
          duration={2}
          delay={0}
        >
          <a href="tel:+989388856602">
            <span className="phone">09388856602</span>
          </a>
        </Tween>
        <Tween
          ease={BezierEasing(1, 0, 0.25, 1)}
          from={{
            scale: "0.5",
          }}
          to={
            {
              scale:"1"
            }
          }
          playState={
            elementsView.landing == null
              ? PlayState.pause
              : elementsView.landing
              ? PlayState.play
              : PlayState.reverse
          }
          duration={1}
          delay={2}
        >
          <div className="social">
            <SocialIcon url="https://github.com/alefseen" bgColor="#fff" />
            <SocialIcon url="https://codepen.io/alefseen" bgColor="#fff" />
            <SocialIcon
              network="whatsapp"
              url="https://wa.me/989388856602"
              bgColor="#fff"
            />
            <SocialIcon url="mailto:sooltaniyan@gmail.com" bgColor="#fff" />
          </div>
        </Tween>
      </div>
    </div>
  );
}

export default About;
