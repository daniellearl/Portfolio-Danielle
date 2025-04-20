import React from "react";
import "../../App.css";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <h2>
        Let's Work Together!
        <br />
        I’m always open to cool projects and new opportunities. You can find my
        LinkedIn, Email, and GitHub down below, feel free to reach out anytime!
      </h2>

      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/danielle-denise-arlantico-2b0052292/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          LinkedIn
        </a>
        <a
          href="mailto:danielle.arlantico@gmail.com"
          className="contact-button"
        >
          Email
        </a>
        <a
          href="https://github.com/daniellearl"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
