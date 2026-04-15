import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo / Name */}
        <h2 className="footer-logo">Anchal</h2>

        {/* Navigation Links */}
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Instagram</a>
        </div>

      </div>

      {/* Bottom Line */}
      <p className="footer-bottom">
        © 2026 Anchal Prajapati | All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;