import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./Portfolio/Portfolio";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";

const App = () => {
  useEffect(() => {
    const handleWindowLoad = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('load', handleWindowLoad);

    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
