import React from "react";
import "./Dreams.css";
const Dreams = () => {
  let dreams = [
    {
      key: 1,
      name: "Our Vision",
      description:
        "To be a leading institution in the field of Information Technology and to produce competent professionals with high ethical values and commitment to the society.",
      img: "https://picsum.photos/150",
    },
    {
      key: 2,
      name: "Our Mission",
      description:
        "To provide quality education in the field of Information Technology and to produce competent professionals with high ethical values and commitment to the society.",
      img: "https://picsum.photos/150",
    },
  ];

  return (
    <section id="dreams">
      <div className="container">
        <h2>Dreams</h2>
        <div className="content">
          {dreams.map((dream) => (
            <div className="dream" key={dream.key}>
              <div className="contentBx">
                <div className="imgBx">
                  <img src={dream.img} alt="" />
                </div>
                <h3>{dream.name}</h3>
                <p>{dream.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dreams;
