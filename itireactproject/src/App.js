import React from "react";
import Header from "./Componant/Header";
import Home from "./Componant/Home";
import About from "./Componant/About";
import Projects from "./Componant/Projects";
import Dreams from "./Componant/Dreams";
import Skills from "./Componant/Skills";
import Contact from "./Componant/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="Page">
      <Header />
      <Home />
      <About />
      <Projects />
      <Dreams />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
