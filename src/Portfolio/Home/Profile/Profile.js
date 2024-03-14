import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";
import profileImage from "../../../assets/images/profile_picture.jpg"

const Profile = () => {
  const socialData = [
    { link: "https://github.com/quangduy201", icon: "github" },
    { link: "https://www.linkedin.com/in/quangduy201/", icon: "linkedin-square" },
    { link: "https://www.instagram.com/quangduy201/", icon: "instagram" },
    { link: "https://www.facebook.com/quangduy201", icon: "facebook-square" },
    { link: "https://www.youtube.com/@quangduy201", icon: "youtube-play" }
  ];

  const introduction = [
    "A passionate developer crafting digital experiences", 2000,
    "A flexible programmer pushing the boundaries of possibility", 2000,
    "A curious learner exploring the frontiers of development", 2000,
    "An adaptable enthusiast embracing the art of coding", 2000,
    "A dedicated coder creating elegant solutions", 2000,
    "An innovative coder building the future of technology", 2000
  ];

  const startingYear = 2021;
  const workingYears = new Date().getFullYear() - startingYear;

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {socialData.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fa fa-${item.icon}`}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            Hello, I'm <span className="highlighted-text">Duy</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            <div className="text-animation">
              <TypeAnimation
                sequence={introduction}
                speed={65}
                repeat={Infinity}
              />
            </div>
            <span className="profile-role-tagline">
              {workingYears} years of working experience.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <a href="mailto:dinhduy2012003@gmail.com">
            <button className="btn primary-btn">Contact me</button>
          </a>
          <a href="/" /* download="QuangDuy_CV.pdf" */>
            <button className="btn highlighted-btn">Download CV</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background">
          <img src={profileImage} alt="Quang Duy - Full Stack Developer" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
