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
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [wrapper_class, setWrapperClass] = useState("wrapper hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const closeMenu = () => {
    setBurgerClass("burger-bar unclicked");
    setMenuClass("menu hidden");
    setWrapperClass("wrapper hidden")
    setIsMenuClicked(false);
  };

  const openMenu = () => {
    setBurgerClass("burger-bar clicked");
    setMenuClass("menu visible");
    setWrapperClass("wrapper visible")
    setIsMenuClicked(true);
  };

  const updateMenu = () => {
    if (isMenuClicked) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <div className="mobile">
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
      </div>
      <div className={menu_class} onTouchMove={closeMenu}>
        <ul className="menu-links">
          {menuData.map((item, index) => {
            return (
              <div key={index}>
                <Link to={item.id} smooth={'easeInOutQuad'} duration={1000} offset={-80} onClick={updateMenu} >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
      <div className={wrapper_class} onClick={closeMenu} onTouchMove={closeMenu}></div>
    </nav>
  );
};

export default NavBar;
