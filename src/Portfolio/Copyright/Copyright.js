import React from "react";
import { Link } from "react-router-dom";
import "./Copyright.css";

const Copyright = () => {
  const year = new Date().getFullYear();

  const scrollToTheTop = () => {
    window.scrollTo({ top:0, behavior:"instant" });
  };

  return (
    <div className="copyright">
      <p>Copyright &copy; {year} Quang Duy. All rights reserved.</p>
      <p>
        <Link to="/privacy-policy" onClick={scrollToTheTop}>Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Copyright;
