import React from "react";
import "./Home.css";

if (window.innerWidth > 600) {
  // document.getElementById("home").style.height = "calc(100vh - 110px)";
} else {
  document.getElementById("home").style.height = "calc(100vh - 60px)";
}

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <h2>Home</h2>
        <p>Insert your introduction and personal information here.</p>
      </div>
    </section>
  );
};

export default Home;
