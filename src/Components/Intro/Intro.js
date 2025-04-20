import React from "react";
import "./Intro.css";
import "../../App.css";

import Picture from "../../assets/intro.jpg";

const Intro = () => {
  return (
    <div
      className="intro-background"
      style={{ backgroundImage: `url(${Picture})` }}
    >
      <div className="intro-overlay">
        <div className="intro-text">
          <h1>Hi! I'm</h1>
          <h1> Danielle Arlantico</h1>
          <h2>
            A student developing efficient and effective software solutions.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Intro;
