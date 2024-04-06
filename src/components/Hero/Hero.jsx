import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* <h2>Building Digital Experiences That Inspire</h2> */}
        <h2>
          Yerico Alexander <span>Frontend Developer</span>
        </h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-image">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react.webp" alt="" />
          </div>
          <img className="img-hero" src="./assets/images/img-hero.png" alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/css.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
