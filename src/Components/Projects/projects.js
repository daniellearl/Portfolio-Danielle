import React from "react";
import "../../App.css";
import "./project.css";
import pewPewDemo from "../../assets/Pew-Pew-Demo.mp4";
import youtubeIcon from "../../assets/youtube-icon.jpg";
import githubIcon from "../../assets/github-mark.png";
import websiteDemo from "../../assets/Website-Demo.mp4";

const Projects = () => {
  return (
    <div className="project">
      <div className="project-box">
        <h1>PROJECTS</h1>
      </div>

      {/*PROJECT NAME AND LANGUAGES*/}
      <h1 className="project-title poppins-bold">Pew Pew!</h1>
      <div className="project-lang">
        <div className="project-info">
          <h2>Technology Stacks</h2>
          <div className="lang-container">
            <div className="lang">
              <h1>C#</h1>
            </div>
            <div className="lang">
              <h1>Unity</h1>
            </div>
            <div className="lang">
              <h1>GitHub</h1>
            </div>
            <div className="lang">
              <h1>Visual Studio Code</h1>
            </div>
          </div>
        </div>
        <div className="project-icons">
          <a
            href="https://www.youtube.com/watch?v=I9rjIkhSkvs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="YouTube" className="youtube-icon" />
          </a>
          <a
            href="https://github.com/Cristec231-byte/PewPew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </div>
      </div>

      {/*VIDEO AND DESCRIPTION*/}
      <div className="project-row">
        <div className="project-photo">
          <video
            width="640"
            height="360"
            autoPlay
            loop
            muted
            playsInline
            style={{ borderRadius: "16px" }}
          >
            <source src={pewPewDemo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1>
            Developed by Danielle Arlantico with Joy Zhu, Edward Vuong, and
            Andreii
          </h1>
        </div>

        {/*GAME DESCRIPTION*/}
        <div className="project-des">
          <h1>
            I developed a 2D pixel-style shooting game inspired by "Contra" for
            my Software Development course. The player faces off against demons
            to protect Earth and when enemies appear, it’s time to PEW PEW!
            <br />I built this game with a talented team and focused on
            developing the following core mechanics:
          </h1>
          <ul className="list">
            <li>Health and Damage System for the Player and Boss</li>
            <li>Player Movement</li>
            <li>Game Over Menu</li>
            <li>Graphics Settings</li>
            <li>Character Selection</li>
          </ul>
          <h1>
            If you're interested in the full gameplay, click the YouTube icon
            for a demo video or download our git repository!
          </h1>
        </div>
      </div>

      {/* ANOTHER PROJECT */}
      <h1 className="project-title poppins-bold">Portfolio Website</h1>
      <div className="project-lang">
        <div className="project-info">
          <h2>Technology Stacks</h2>
          <div className="lang-container">
            <div className="lang">
              <h1>Visual Studio Code</h1>
            </div>
            <div className="lang">
              <h1>React.js</h1>
            </div>
            <div className="lang">
              <h1>CSS</h1>
            </div>
            <div className="lang">
              <h1>Vercel</h1>
            </div>
          </div>
        </div>
        <div className="project-icons">
          {/*<a
            href="[YouTube link here]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="YouTube" className="youtube-icon" />
          </a>*/}
          <a
            href="https://github.com/daniellearl/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </div>
      </div>

      <div className="project-row">
        <div className="project-photo">
          <video
            width="640"
            height="360"
            autoPlay
            loop
            muted
            playsInline
            style={{ borderRadius: "16px" }}
          >
            <source src={websiteDemo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1>Developed by Danielle Arlantico</h1>
        </div>

        <div className="project-des">
          <h1>
            I'm currently developing this website from scratch. On the side,
            there's demo showing how I built the experience adn education
            component. Some features are still in progress and will be added
            soon!
            <br />
            Developing features:
          </h1>
          <ul className="list">
            <li>Dark Mode</li>
            <li>Phone Compatability</li>
            <li>Contact Form</li>
          </ul>
          <h1>
            If you're curious about how this website was built, check out the
            live coding demo on the side or explore the code by downloading our
            GitHub repository!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
