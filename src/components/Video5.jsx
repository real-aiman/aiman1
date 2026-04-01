import React from "react";
import "./Video5.css";
import backgroundImage from "../assets/eman.png"; // make sure this path is correct

function Video5() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="login-container">
        <h2>Login</h2>

        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button>Log In</button>

        <p className="register">
          Don’t have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Video5;