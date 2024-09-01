import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage({ HandleLogin, HandleSignUp }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setsignUpData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setsignUpData({ ...signUpData, [name]: value });
  };

  return (
    <div className="login-container">
      <input type="checkbox" id="check" />
      <div className="login-form">
        <header>Login</header>
        <form action="#">
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          <a href="#">Forgot password?</a>
          <input
            type="button"
            className="button"
            value="Login"
            onClick={() => HandleLogin(loginData)}
          />
        </form>
        <div className="signup">
          <span className="signup">
            Don't have an account?
            <label htmlFor="check">Signup</label>
          </span>
        </div>
      </div>
      <div className="registration-form">
        <header>Signup</header>
        <form action="#">
          <input
            type="text"
            name="firstName"
            placeholder="Enter your username"
            onChange={handleSignUpChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={handleSignUpChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            onChange={handleSignUpChange}
          />

          <input
            type="button"
            className="button"
            value="Signup"
            onClick={() => HandleSignUp(signUpData)}
          />
        </form>
        <div className="signup">
          <span className="signup">
            Already have an account?
            <label htmlFor="check">Login</label>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
