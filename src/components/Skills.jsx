import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <h1 className="skills-title">My Skills</h1>

      <div className="skills-container">

        {/* Skill 1 */}
        <div className="skill">
          <p>HTML</p>
          <div className="progress-bar">
            <div className="progress html"></div>
          </div>
        </div>

        {/* Skill 2 */}
        <div className="skill">
          <p>CSS</p>
          <div className="progress-bar">
            <div className="progress css"></div>
          </div>
        </div>

        {/* Skill 3 */}
        <div className="skill">
          <p>JavaScript</p>
          <div className="progress-bar">
            <div className="progress js"></div>
          </div>
        </div>

        {/* Skill 4 */}
        <div className="skill">
          <p>React</p>
          <div className="progress-bar">
            <div className="progress react"></div>
          </div>
        </div>

        {/* Skill 5 */}
        <div className="skill">
          <p>Node.js</p>
          <div className="progress-bar">
            <div className="progress node"></div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Skills;