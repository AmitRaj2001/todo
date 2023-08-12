import React from "react";
import "./AboutContactLogin.css";

const Login = () => {
    return (
        <div className="login-container">
      <h1>Login Page</h1>
      <form className="login-form">
        <label>Email:</label>
        <input
          className="login-input"
          type="email"
          
        />
        <label>Password:</label>
        <input
          className="login-input"
          type="password"
          
        />
        <button className="login-button" >
          Login
        </button>
      </form>
    </div>
    );
};
export default Login;
