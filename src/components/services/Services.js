import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Improve an existing UX.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design a new Mobile app.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design a new Web app.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop and Deploy a new Web app.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CMS Web development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cloud-base Web development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance tuning.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI Test Automation.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO Content creation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data-driven revenue marketing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
