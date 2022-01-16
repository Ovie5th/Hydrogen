import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import qs from 'qs'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const History = useHistory();
    
    

    const submitHandler = async (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            setError("Email and Password are required");
            return;
        }
        setLoading(true);
        await axios
          .request({
            method: "post",
            url: "https://api.staging.hydrogenhr.com/api/v1/oauth/token",
            data: qs.stringify({
              username,
              password,
              grant_type: "password",
            }),
            auth: {
              username: "hydrogenhr-hris-service",
              password: "password",
            },
            headers: {
              "content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          })
          .then(async (response) => {
            window.localStorage.setItem("Htoken", response.data.access_token);
            // console.log(response.data.access_token, "token");
            // console.log('jk')
            History.push("/dashboard");
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
            <button className="login-button">{loading ? 'loading...':'login' }</button>
          </form>
          <p>{error}</p>
          <p className="home-link">
            Dont have an account yet? <a href="/">Join Hydrogen Payroll</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
