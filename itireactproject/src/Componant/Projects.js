import React from "react";
import "./Projects.css";

const Projects = () => {
  let projects = [
    {
      key: 1,
      name: "Project 1",
      description: "Description of Project 1",
      img: "https://picsum.photos/200/200",
    },
    {
      key: 2,
      name: "Project 2",
      description: "Description of Project 2",
      img: "https://picsum.photos/200/200",
    },
    {
      key: 3,
      name: "Project 3",
      description: "Description of Project 3",
      img: "https://picsum.photos/200/200",
    },
    {
      key: 4,
      name: "Project 4",
      description: "Description of Project 4",
      img: "https://picsum.photos/200/200",
    },
    {
      key: 5,
      name: "Project 5",
      description: "Description of Project 5",
      img: "https://picsum.photos/200/200",
    },
    {
      key: 6,
      name: "Project 6",
      description: "Description of Project 6",
      img: "https://picsum.photos/200/200",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        {/* Insert your project list here */}
        <div className="content">
          {projects.map((project) => (
            <div className="project" key={project.key}>
              <div className="imgBx">
                <img src={project.img} alt={project.name} />
              </div>
              <div className="contentBx">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
