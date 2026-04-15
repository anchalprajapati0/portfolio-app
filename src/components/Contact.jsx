import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-container">

        {/* Left Info */}
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            Feel free to reach out for collaborations or just a friendly hello 😊
          </p>

          <div className="info-box">
            <p><strong>Email:</strong> prajapatianchal1234@email.com</p>
            <p><strong>Phone:</strong> 8957341623</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;