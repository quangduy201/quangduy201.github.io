import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./Portfolio/NavBar/NavBar";
import Home from "./Portfolio/Home/Home";
import AboutMe from "./Portfolio/AboutMe/AboutMe";
import Projects from "./Portfolio/Projects/Projects";
import ContactMe from "./Portfolio/ContactMe/ContactMe";

const App = () => {
  useEffect(() => {
    const handleWindowLoad = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('load', handleWindowLoad);

    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
