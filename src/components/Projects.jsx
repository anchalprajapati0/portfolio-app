import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  const projectData = [
    {
      title: "Login System",
      desc: "User authentication system with login and validation features.",
      path: "/login",
    },
    {
      title: "Registration Form",
      desc: "A form with validation using React state management.",
      path: "/registration",
    },
    {
      title: "Stopwatch",
      desc: "A stopwatch app with start, stop and reset functionality.",
      path: "/stopwatch",
    },
    {
      title: "Counter App",
      desc: "Simple counter with increment and decrement functionality.",
      path: "/counter",
    },
    {
      title: "Palindrome Checker",
      desc: "Checks whether a string is palindrome or not.",
      path: "/palindrome",
    },
    {
      title: "Armstrong Number",
      desc: "Program to check Armstrong numbers using logic.",
      path: "/armstrong",
    },
    {
      title: "Calculator App",
      desc: "Basic calculator performing arithmetic operations.",
      path: "/calculator",
    },
    {
      title: "Google Maps Clone",
      desc: "Location-based app using map integration.",
      path: "/map",
    },
    {
      title: "Weather App",
      desc: "Fetches real-time weather using API.",
      path: "/weather",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <button
              className="view-btn"
              onClick={() => navigate(project.path)}
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;