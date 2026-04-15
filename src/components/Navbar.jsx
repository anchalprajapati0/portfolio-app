import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="logo">Anchal</h2>

      {/* Links */}
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Button */}
      <button className="nav-btn">Hire Me</button>
    </nav>
  );
};

export default Navbar;