import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c8smy6o",
      "template_hgym5sr",
      form.current,
      "JCJHScP_Rba_J-b3O"
    )
    .then(
      () => {
        alert("Message Sent Successfully ✅");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message ❌");
        console.log(error.text);
      }
    );
  };

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
            <p><strong>Email:</strong> prajapatianchal1234@gmail.com</p>
            <p><strong>Phone:</strong> 8957341623</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </div>

        {/* Right Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>
    </section>
  );
};

export default Contact;