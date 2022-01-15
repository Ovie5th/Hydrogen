import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import axios from 'axios'
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('')

    localStorage.setItem('token', token)

    const submitHandler = async (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            setError("Email and Password are required");
            return;
        }
        setLoading(true);
        await axios
            .request({
                url: "https://api.staging.hydrogenhr.com/api/v1/",
                data: {
                    username,
                    password,
                },
                method: "post",
                withCredentials: true,
            })
                .then(async (response) => {
                    console.log("Success:", response);
                    const tokenFromServer = response.data.token;
                    setToken(tokenFromServer)
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error.response);
                    setLoading(false);
                });
    };

  return (
    <div className="home-wrapper">
      <div className="left-side-home">
        <div className="hydrogen-logo">
          <FaInstagram />
        </div>
        <h1 className="hydrogen-payroll">HydrogenPayroll</h1>
        <p className="left-home-text">
          Embrace the immense benefit of a world class people management suite
          by integrating with hydrogenHR and have an Improved Employee
          Experience and Management
        </p>
        <ul className="left-side-list">
          <li>Contact us</li>
          <li>Legal</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="right-side-home">
        <div className="right-side-wrapper">
          <h1 className="welcome-back">Welcome back</h1>
          <p className="login-text">
            login into your hydrogen dashboard with your credentials
          </p>
        <form onSubmit={submitHandler} className="home-login-form">
            <label>
              <p>Email or Phonenumber</p>
              <input
                className="home-login-input"
                type="text"
                placeholder="Enter your email address or phone number"
                value={username}
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              <p>
                Password<span className="forgot-password">Forgot Password</span>
              </p>
              <input
                className="home-login-input"
                type="password"
                placeholder="************"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className="remember-me">
              <input type="checkbox" />
              <span className="remember-me-span">Remember me </span>
            </label>
            <button className="login-button">login</button>
          </form>
          <p className="home-link">
            Dont have an account yet? <a href="/">Join Hydrogen Payroll</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
