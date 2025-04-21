import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1>Danielle</h1>

        {/*Link Icon*/}
        <div className="stacked" onClick={toggleMenu}>
          &#9776;
        </div>

        {/*Links*/}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <div className="close-btn" onClick={toggleMenu}>
            &times;
          </div>
          <a href="#about" onClick={toggleMenu}>
            About Me
          </a>
          <a href="#education" onClick={toggleMenu}>
            Experience & Education
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
