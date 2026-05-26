import React from "react";
import "../styles/Hero.css";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      
      {/* Left Content */}
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Anchal Prajapati</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build modern, responsive and user-friendly web applications
          using React, JavaScript and Node.js.
        </p>

        <div className="hero-buttons">
          <a href="#contact">
            <button className="btn-primary">Contact Me</button>
          </a>

          <a href="#projects">
            <button className="btn-secondary">View Projects</button>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image">
        <div className="circle">
          <img src={profile} alt="profile" />
        </div>
      </div>

    </section>
  );
};

export default Hero;