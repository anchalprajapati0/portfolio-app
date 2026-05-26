import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">

      {/* Snowfall Effect */}
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>

      {/* Login Box */}
      <div className="login-box">
        <h2>Login</h2>

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;