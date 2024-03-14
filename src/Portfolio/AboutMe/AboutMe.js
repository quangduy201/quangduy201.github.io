import React from "react";
import "./AboutMe.css";
import aboutMeImage from "../../assets/images/about_me.jpg";
import { Accordion } from "react-bootstrap";
import { siBootstrap, siCplusplus, siCsharp, siCss3, siDjango, siDocker, siExpress, siFirebase, siGit, siGooglecloud, siHtml5, siIntellijidea, siJavascript, siMongodb, siNodedotjs, siPostman, siPython, siReact, siSpring, siTypescript, siVuedotjs } from "simple-icons";

const AboutMe = () => {
  const skills = [
    {name: "Languages", items: [
      {
        title: 'Java',
        hex: '3A75B0',
        viewBox: '0 0 40 55',
        path: 'M27.3398 37.7219C25.9985 38.1017 22.9773 38.7211 18.6571 38.7211C14.4173 38.7211 10.953 37.9953 10.9422 37.1406C10.935 36.5721 11.6224 36.3243 11.6224 36.3243L11.5001 36.2533C9.46984 36.6122 7.58382 37.1669 7.59472 37.9974C7.61352 39.5044 13.3765 40.6362 18.6488 40.6362C23.131 40.6362 27.4358 39.8841 29.3776 38.8989L27.3398 37.7219ZM13.0118 42.381C12.0702 42.5684 10.0181 43.0396 10.0181 44.0375C10.0181 45.4198 14.4086 46.4785 18.6471 46.4785C24.4794 46.4785 26.8682 44.9778 26.9763 44.9001L24.5512 43.4971C23.5199 43.7428 21.7821 44.1289 18.6529 44.1289C15.1606 44.1289 12.8853 43.5308 12.8853 42.876C12.8853 42.737 12.9721 42.5722 13.134 42.4517L13.0118 42.381ZM36.8447 33.0803C36.6815 36.2104 33.7897 38.1593 30.8993 39.8061L31.1614 39.9572C34.2455 39.0896 39.7485 36.5629 39.2936 32.6792C39.067 30.7424 37.2967 29.3585 34.9888 29.3585C34.2701 29.3585 33.6307 29.4853 33.1124 29.6431L33.1108 29.6481L33.0014 29.9236C35.0656 29.5196 36.9519 31.027 36.8447 33.0803V33.0803ZM18.5674 51.449C26.6804 51.3785 35.7579 49.7905 35.7345 47.1216C35.7303 46.6379 35.4153 46.3066 35.1415 46.1063L35.0084 46.1826C34.2584 48.2501 27.919 49.7776 18.5536 49.8593C12.5105 49.912 4.13956 48.4642 4.12492 46.7911C4.11029 45.1138 8.09045 44.192 8.09045 44.192L7.80925 44.0313C5.14203 44.3985 0.227453 45.6759 0.243692 47.5202C0.26709 50.1866 11.562 51.5104 18.5674 51.449V51.449ZM17.7234 53.3545C14.4987 53.383 10.5611 53.1159 7.24867 52.5591L6.94194 52.7356C10.2414 53.7031 14.8351 54.2874 19.8828 54.2435C29.7959 54.1567 37.8329 51.6985 37.9919 48.7401L37.8771 48.6733C37.2127 49.4842 32.9251 53.2219 17.7234 53.3545V53.3545ZM5.30474 32.3666C5.30474 30.8713 10.9768 30.0324 13.6177 29.8292L13.8698 29.9748C12.8552 30.1594 8.7849 30.8772 8.7849 31.8136C8.7849 32.8332 15.0279 33.5014 18.6517 33.5014C24.8065 33.5014 28.9903 32.5698 30.1155 32.2627L31.6897 33.1788C30.6117 33.7067 25.9835 35.0902 18.6521 35.0902C10.5039 35.0902 5.30474 33.4959 5.30474 32.3666 M29.9277 11.4664L29.7913 11.3884C27.3131 12.2184 19.6854 15.2291 19.6854 20.8427C19.6854 24.0178 22.7858 25.776 22.7858 28.7534C22.7858 29.8155 22.1861 30.8112 21.6979 31.4064L21.9433 31.5483C23.2337 30.7094 25.5185 28.8931 25.5185 26.5481C25.5185 24.5624 22.77 22.1765 22.77 19.624C22.77 15.6022 28.0731 12.4467 29.9277 11.4664V11.4664ZM26.1834 4.10872C26.1834 12.417 14.7976 15.5963 14.7976 21.5033C14.7976 25.65 17.5474 28.2505 19.0686 29.8943L18.945 29.9657C17.0244 28.7642 11.9709 25.7448 11.9709 20.7572C11.9709 13.7551 25.0486 10.4092 25.0486 2.4556C25.0486 1.47696 24.9038 0.726955 24.8024 0.322143L24.9347 0.245862C25.3491 0.7667 26.1834 2.06874 26.1834 4.10872'
      },
      siJavascript, siTypescript, siPython, siHtml5, siCss3, siCsharp, siCplusplus
    ]},
    {name: "Frameworks", items: [
      siSpring, siReact, siVuedotjs, siBootstrap, siExpress, siDjango
    ]},
    {name: "Tools", items: [
      siDocker, siMongodb, siFirebase, siGooglecloud, siNodedotjs, siPostman, siGit, siIntellijidea
    ]},
  ]

  const getSvg = (icon) => {
    return (
      <svg
          fill={'#' + icon.hex}
          role="img"
          viewBox={icon.viewBox || "0 0 24 24"}
          xmlns="http://www.w3.org/2000/svg"
          key={icon.title}
      >
        <title>{icon.title}</title>
        <path d={icon.path}/>
      </svg>
    );
  };

  return (
    <section className="about">
      <h1 className="heading heading-about">About Me</h1>
      <div className="about-container">
        <div className="about-left">
          <div className="img-container">
            <img src={aboutMeImage} alt="" />
          </div>
        </div>
        <div className="about-right">
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Introduction</Accordion.Header>
              <Accordion.Body>
                <p><b>Hey there! I'm Quang Duy, a dedicated third-year software engineering student.</b></p>
                <p>Coding is not just my area of study; it's my greatest passion and the driving force behind everything I do. Whether it's crafting intuitive user interfaces or optimizing algorithms, I find joy in every aspect of software development.</p>
                <p>My enthusiasm for the field keeps me continuously learning and growing. With an unwavering commitment to excellence, I'm excited to create innovative solutions that make a positive impact.</p>
                <p>Let's connect and collaborate on projects that push the boundaries of what technology can achieve!</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Skills</Accordion.Header>
              <Accordion.Body>
                <ul className="skills-list">
                  {skills.map((skill, index) => {
                    return (
                      <li key={index}>
                        {skill.name}:<div>{skill.items.map(item => getSvg(item))}</div>
                      </li>
                    );
                  })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Education</Accordion.Header>
              <Accordion.Body>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel quisquam, explicabo sit labore dignissimos optio ratione quibusdam doloribus pariatur consequuntur sint. Reprehenderit cupiditate possimus facere quasi voluptatem?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel quisquam, explicabo sit labore dignissimos optio ratione quibusdam doloribus pariatur consequuntur sint. Reprehenderit cupiditate possimus facere quasi voluptatem?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel quisquam, explicabo sit labore dignissimos optio ratione quibusdam doloribus pariatur consequuntur sint. Reprehenderit cupiditate possimus facere quasi voluptatem?</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Experience</Accordion.Header>
              <Accordion.Body>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel quisquam, explicabo sit labore dignissimos optio ratione quibusdam doloribus pariatur consequuntur sint. Reprehenderit cupiditate possimus facere quasi voluptatem?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel quisquam, explicabo sit labore dignissimos optio ratione quibusdam doloribus pariatur consequuntur sint. Reprehenderit cupiditate possimus facere quasi voluptatem?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel quisquam, explicabo sit labore dignissimos optio ratione quibusdam doloribus pariatur consequuntur sint. Reprehenderit cupiditate possimus facere quasi voluptatem?</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
