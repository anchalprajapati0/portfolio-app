import React from "react";
import "../styles/Registration.css";

const Registration = () => {
  return (
    <div className="register-container">

      {/* Snowfall */}
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>

      {/* Registration Box */}
      <div className="register-box">
        <h2>Register</h2>

        <input type="text" placeholder="Enter Full Name" />

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Create Password" />

        <input type="password" placeholder="Confirm Password" />

        <button>Register</button>
      </div>
    </div>
  );
};

export default Registration;