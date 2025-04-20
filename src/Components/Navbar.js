import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/">About Me</a>
        <a href="/">Experience & Education</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
