import React from "react";
import "./Skills.css";
const Skills = () => {
  let skills = [
    {
      key: 1,
      name: "HTML",
      progress: "90%",
    },
    {
      key: 2,
      name: "CSS",
      progress: "80%",
    },
    {
      key: 3,
      name: "JavaScript",
      progress: "70%",
    },
    {
      key: 4,
      name: "React",
      progress: "60%",
    },
    {
      key: 5,
      name: "TypeScript",
      progress: "50%",
    },
    {
      key: 6,
      name: "MongoDB",
      progress: "40%",
    },
  ];

  // window.onload = () => {
  //   let skillscontent = document.querySelector("#skills .content");
  //   let progress = document.querySelectorAll(".progress .progress-bar");

  //   window.addEventListener("scroll", () => {

  //   });
  // };
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        {/* Insert your skills list here */}
        <div className="content">
          {skills.map((skill) => (
            <div className="skill" key={skill.key}>
              <h3>{skill.name}</h3>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ maxWidth: skill.progress }}
                >
                  <span>{skill.progress}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
