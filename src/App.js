import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Projects from "./Components/Projects/projects";
import Edu from "./Components/Education/Edu";
import Contact from "./Components/Contact/contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Edu />
      <Contact />
    </div>
  );
};

export default App;
