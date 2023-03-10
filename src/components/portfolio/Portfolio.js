import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/img1.webp";
import IMG2 from "../../Assets/img2.webp";
import IMG3 from "../../Assets/img3.webp";
import IMG4 from "../../Assets/img4.webp";
import IMG5 from "../../Assets/img5.webp";
import IMG6 from "../../Assets/img6.webp";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <h2 className="container portfolio_container">
        <article className="article_item">
          <div className="portfolio_item-image"><img src={IMG1} alt="image1" /></div>
          <h3>Portfolio Website</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Singh-akshay03/portfolio-website"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github
            </a>
            <a
              href="https://akshaysinghportfolio.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
        <article className="article_item">
          <div className="portfolio_item-image"><img src={IMG2} alt="image1" /></div>
          <h3>Movie Review</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Singh-akshay03/movie-review-app-using-react"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github
            </a>
            <a
              href="https://github.com/Singh-akshay03/movie-review-app-using-react"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
        <article className="article_item">
          <div className="portfolio_item-image"><img src={IMG3} alt="image1" /></div>
          <h3>Movie Review Api</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Singh-akshay03/movie-review-app-using-spring-boot"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github
            </a>
            <a
              href="https://github.com/Singh-akshay03/movie-review-app-using-spring-boot"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
        <article className="article_item">
          <div className="portfolio_item-image"><img src={IMG4} alt="image1" /></div>
          <h3>Firebase-Github</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Singh-akshay03/firebase-github-react"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github
            </a>
            <a
              href="https://github.com/Singh-akshay03/firebase-github-react"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
        <article className="article_item">
          <div className="portfolio_item-image"><img src={IMG5} alt="image1" /></div>
          <h3>TODO LIST</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Singh-akshay03/TO-DO-LIST"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github
            </a>
            <a
              href="https://regal-paletas-c4ce40.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
        <article className="article_item">
          <div className="portfolio_item-image"><img src={IMG6} alt="image1" /></div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
      </h2>
    </section>
  );
};

export default Portfolio;
