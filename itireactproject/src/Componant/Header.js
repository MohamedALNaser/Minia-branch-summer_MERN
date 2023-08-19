import React from "react";
import "./Header.css";
// if window.innerWidth > 600px
// page padding top 100px
// else
// page padding top 60px

if (window.innerWidth > 600) {
  document.body.style.paddingTop = "110px";
} else {
  document.body.style.paddingTop = "60px";
}
window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    document.body.style.paddingTop = "110px";
  } else {
    document.body.style.paddingTop = "60px";
  }
});

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 title="M">ITI</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li className="Dreams">
              <a href="#dreams">Dreams</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
