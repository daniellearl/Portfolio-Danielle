import React from "react";
import "./Intro.css";
import Picture from "../../assets/Filler.jpg";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1 className="poppins-thin">HI I'M</h1>
        <h1 className="name-title poppins-regular tight-line-spacing">
          DANIELLE
        </h1>
        <h1 className="lastname-title poppins-regular tight-line-spacing">
          ARLANTICO!
        </h1>
      </div>

      <div className="intro-image-container">
        <img src={Picture} className="intro-image" />
      </div>
    </div>
  );
};

export default Intro;
