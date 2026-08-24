import React, { useState } from "react";
import axios from "axios";
import "./Login.css";


function Login() {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/login", formData,
  {
    withCredentials: true,
  }
);

      console.log(res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.username);

      alert("Login successful!");

      window.location.href = "http://localhost:3001";

    } catch (err) {
      console.log(err);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-logo">ZERODHA</div>

        <h1>Welcome back</h1>

        <p className="login-subtitle">
          Login to continue to your Zerodha account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-submit">
            Login
          </button>
        </form>

        <p className="login-signup">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
