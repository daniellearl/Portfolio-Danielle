import React from "react";
import "./Navbar.css";
import logo from "../assets/Dark-Mode.png";

const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="Logo" />
      </a>
      <nav className="navbar">
        <a href="/">About Me</a>
        <a href="/">Projects</a>
        <a href="/">Experience</a>
        <a href="/">Education</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
