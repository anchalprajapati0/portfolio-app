import React from "react";
import "../styles/About.css";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      
      <h1 className="about-title">About Me</h1>

      <div className="about-container">
        
        {/* Left Image */}
        <div className="about-img">
          <img src={profile} alt="profile" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2>
            I'm <span>Anchal Prajapati</span>
          </h2>

          <p>
            I am a passionate Full Stack Developer who loves building modern,
            responsive and user-friendly web applications. I enjoy turning
            ideas into real-world projects using technologies like React,
            JavaScript, and Node.js.
          </p>

          <p>
            I focus on writing clean code, creating smooth UI/UX, and
            continuously improving my skills to stay updated with the latest
            technologies.
          </p>

          <button className="about-btn">Contact Me</button>
        </div>

      </div>
    </section>
  );
};

export default About;