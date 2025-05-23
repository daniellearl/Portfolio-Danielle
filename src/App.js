import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Projects from "./Components/Projects/projects";
import Edu from "./Components/Education/Edu";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Intro />
        <About />
        <Edu />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
