import React from "react";
import "./Home.css";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <header className="home">
      <Profile />
      <Footer />
    </header>
  );
};

export default Home;
