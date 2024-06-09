import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>15 years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ completed projects</small>
            </article>
          </div>
          <p>
            I am a highly passionate software expert, focusing primarily on Web
            Applications, Web Services, Cloud Computing (used Azure at Microsoft
            and OCI at Oracle, used AWS and GCP for my Personal projects), Big
            Data (COSMOS and SCOPE), and Mobile Development. My 15 years of
            professional experience, on top of my undergraduate and graduate
            studies (in Vietnam and in the U.S.) have equipped me with a
            profound knowledge of object-oriented design and development,
            debugging and troubleshooting product issues. My strongest technical
            skills are C# and .Net Framework, Java, Multi-tier applications,
            developing and testing websites (ASP.NET, HTML5, CSS3, jQuery,
            JavaScript, TypeScript, Node.js, Silverlight, IIS, MVC, MVVM, Ajax,
            Kendo UI, Knockout, React, Firebug, Fiddler, Selenium), MS SQL
            Server, COSMOS, and SCOPE. I have experience in many platforms
            including Windows 8.1/10, Windows Server 2008/2012, Windows Mobile
            6.1/6.5, Blackberry, and Linux. I'm also proficient in using tools
            like WTT, MS Test, ProductStudio, CoreXT, MS Build, Jira, Git,
            Jenkins. In addition, I possess strong analytical, problem solving,
            and communication skills; a passion for solving puzzles, algorithms,
            and developing on a rock-solid foundation; and am able to work under
            pressure in a fast-paced environment either independently or in a
            team.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
