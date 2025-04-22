import React from "react";
import "../../App.css";
import "./project.css";

import pewPewDemo from "../../assets/Pew-Pew-Demo.mp4";
import websiteDemo from "../../assets/Website-Demo.mp4";
import youtubeIcon from "../../assets/youtube-icon.jpg";
import githubIcon from "../../assets/github-mark.png";

const techLang = (stack) =>
  stack.map((tech, index) => (
    <div className="lang" key={index}>
      <h1>{tech}</h1>
    </div>
  ));

const ProjectCard = ({
  title,
  techStack,
  videoSrc,
  description,
  features,
  contributors,
  youtubeLink,
  githubLink,
}) => (
  <>
    <h1 className="project-title poppins-bold">{title}</h1>
    <div className="project-lang">
      <div className="project-info">
        <h2>Technology Stacks</h2>
        <div className="lang-container">{techLang(techStack)}</div>
      </div>
      <div className="project-icons">
        {youtubeLink && (
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="youtube-icon" />
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        )}
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
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {contributors && <h1>{contributors}</h1>}
      </div>

      <div className="project-des">
        <h1>{description}</h1>
        {features && (
          <ul className="list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </>
);

const Projects = () => {
  return (
    <section id="projects" className="project">
      <div className="project-box">
        <h1>PROJECTS</h1>
      </div>

      <ProjectCard
        title="Pew Pew!"
        techStack={["C#", "Unity", "GitHub"]}
        videoSrc={pewPewDemo}
        contributors="Developed by Danielle Arlantico with Joy Zhu, Edward Vuong, Crist Choy and Andreii Dela Rosa"
        description={`I developed a 2D pixel-style shooting game inspired by "Contra" for my Software Development course. The player faces off against demons to protect Earth and when enemies appear, it’s time to PEW PEW! I built this game with a talented team and focused on developing the following core mechanics:`}
        features={[
          "Health and Damage System for the Player and Boss",
          "Player Movement",
          "Game Over Menu",
          "Graphics Settings",
          "Character Selection",
        ]}
        youtubeLink="https://www.youtube.com/watch?v=I9rjIkhSkvs"
        githubLink="https://github.com/Cristec231-byte/PewPew"
      />

      <ProjectCard
        title="Portfolio Website"
        techStack={["React.js", "CSS", "Vercel"]}
        videoSrc={websiteDemo}
        contributors="Developed by Danielle Arlantico"
        description={`I'm currently building this website from scratch. On the side, you'll find a demo showcasing how I developed the experience and education components (available on desktop). Some features are still in progress and will be added soon. Developing features:`}
        features={["Dark Mode", "Contact Form"]}
        githubLink="https://github.com/daniellearl/portfolio"
      />
    </section>
  );
};

export default Projects;
