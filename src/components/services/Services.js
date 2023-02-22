import React from "react";
import "./Services.css";
import { BsCheck2All } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="services_head">
            <h3>Content Writing</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2All size={50} className="service_list-icon" />
              <p>I write content related to competative coding</p>
            </li>
            <li>
              <BsCheck2All size={50} className="service_list-icon" />
              <p>
                I write content related to the topics in which my expertise lies
                like React , Node js , Spring etc.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="services_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2All size={50} className="service_list-icon" />
              <p>I do develop the websites using React js.</p>
            </li>
            <li>
              <BsCheck2All size={50} className="service_list-icon" />
              <p>I also work with PWA mobile applications.</p>
            </li>
            <li>
              <BsCheck2All size={50} className="service_list-icon" />
              <p>I also develop website using HTML, CSS and Javascript</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="services_head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2All size={50} className="service_list-icon" />
              <p>I develop backend using Nodejs</p>
            </li>
            <li>
              <BsCheck2All size={50} className="service_list-icon" />
              <p>I develop backend using spring boot.</p>
            </li>
            <li>
              <BsCheck2All size={50} className="service_list-icon" />
              <p>I work with microservices.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
