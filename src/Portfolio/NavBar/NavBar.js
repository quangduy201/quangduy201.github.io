import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const menuData = [
    {
      title: "Home",
      id: "home",
    },
    {
      title: "About",
      id: "about",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Contact",
      id: "contact",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  // cosnt [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-left">
          <Link to="home" smooth={'easeInOutQuad'} duration={500}>
            {/* <div className="logo-image">
              <img src="" alt="Logo"/>
            </div> */}
            <span className="logo-title">Quang Duy</span>
          </Link>
        </div>
        <div className="navbar-right">
          <ul className="navbar-links">
            {menuData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.id} smooth={'easeInOutQuad'} duration={1000} offset={-80}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mobile">
        {/* <i className={}></i> */}
      </div>
    </nav>
  );
};

export default NavBar;
