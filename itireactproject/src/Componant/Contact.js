import React from "react";
import "./Contact.css";
const Contact = () => {
  let data = [
    {
      name: "Mohamed Naser",
      phone: "+44 123 456 789",
      email: "asdasd123@gamil.com",
      emailHref: "mailto:asdasd123@gamil.com",
      address: "123 Street Name, City, England",
    },
  ];

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="content">
          <div className="right">
            <h3>Get in Touch</h3>
            <form action="">
              <div className="field">
                <input type="text" placeholder="Name" />
              </div>
              <div className="field">
                <input type="email" placeholder="Email" />
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className="left">
            <h3>Info</h3>
            <div className="info">
              <img src="https://picsum.photos/250" alt="profile" />
              <div className="info-content">
                <h3>{data[0].name}</h3>
                <p>{data[0].phone}</p>
                <p>
                  <a href={data[0].emailHref}>{data[0].email}</a>
                </p>
                <p>{data[0].address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
