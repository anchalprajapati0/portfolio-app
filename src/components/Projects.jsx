import React from "react";
import "../styles/Projects.css";

const Projects = () => {

  const projectData = [
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio built using React and Vite with responsive design.",
    },
    {
      title: "Login System",
      desc: "User authentication system with login and validation features.",
    },
    {
      title: "Registration Form",
      desc: "A form with validation using React state management.",
    },
    {
      title: "Stopwatch",
      desc: "A stopwatch app with start, stop and reset functionality.",
    },
    {
      title: "Counter App",
      desc: "Simple counter with increment and decrement functionality.",
    },
    {
      title: "Palindrome Checker",
      desc: "Checks whether a string is palindrome or not.",
    },
    {
      title: "Armstrong Number",
      desc: "Program to check Armstrong numbers using logic.",
    },
    {
      title: "Calculator App",
      desc: "Basic calculator performing arithmetic operations.",
    },
    {
      title: "Dark/Light Theme",
      desc: "Theme toggle feature using React hooks.",
    },
    {
      title: "Google Maps Clone",
      desc: "Location-based app using map integration.",
    },
    {
      title: "Weather App",
      desc: "Fetches real-time weather using API.",
    }
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="project-buttons">
              <a href="#"><button>Live</button></a>
              <a href="#"><button>Code</button></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;