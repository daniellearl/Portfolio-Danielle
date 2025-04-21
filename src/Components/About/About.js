import React from "react";
import "./About.css";
import "../../App.css";
import image from "../../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="about ">
      <div className="about-box ">
        <div className="about-title">
          <h1>ABOUT ME</h1>
        </div>

        <div className="about-text">
          <h1>
            Hi! I’m Danielle Arlantico and I am currently studying a Bachelor of
            Computer and Information Sciences at AUT. I’m in my final year and
            am double-majoring in Software Development and Digital Services
            <br />
            <br />I love applying my problem solving skills to develop efficient
            and effective software solutions. Outside of coding, I enjoy playing
            video games, gymming, art, and meeting new people!
          </h1>
        </div>

        <div className="tech">
          <h2>Tech Stacks I'm Familiar With:</h2>
          <ul className="techlist">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>SQL</li>
            <li>Python</li>
            <li>Java</li>
            <li>C#</li>
            <li>C</li>
            <li>C++</li>
            <li>PHP</li>
          </ul>
        </div>
      </div>
      <div className="image-box">
        <img src={image} className="image" />
      </div>
    </section>
  );
};

export default About;
