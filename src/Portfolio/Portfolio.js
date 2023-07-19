import React from "react";
import "./Portfolio.css";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import Copyright from "./Copyright/Copyright";

const Portfolio = () => {

  return (
    <div className="portfolio">
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Copyright />
    </div>
  );
};

export default Portfolio;
