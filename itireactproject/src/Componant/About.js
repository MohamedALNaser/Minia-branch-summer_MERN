import React from "react";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About</h2>
        <div className="content">
          <div className="right">
            <h3>Hi, I'm Mohamed Naser</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quos, voluptate, quibusdam voluptas dolorum
              exercitationem quia voluptatibus fugit doloribus quae
              consequuntur? Quisquam voluptatum, quos, voluptate, quibusdam
              voluptas dolorum exercitationem quia voluptatibus fugit doloribus
              quae consequuntur?
            </p>
          </div>
          <div className="left">
            <img src="https://picsum.photos/300" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
