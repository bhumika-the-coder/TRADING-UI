import { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
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
    const res = await axios.post(
      "https://zerodha-ui-clone.onrender.com/signup",
      formData,
      {
        withCredentials: true,
      }
    );

    console.log(res.data);

    alert(res.data.message);

    window.location.href = "https://zerodha-ui-clone.vercel.app/";
  } catch (err) {
    console.log("FULL ERROR:", err);
    console.log("RESPONSE:", err.response);
    console.log("RESPONSE DATA:", err.response?.data);

    alert(
      err.response?.data?.error ||
      err.response?.data?.message ||
      err.message
    );
  }
};
    // } catch (err) {
    //   console.log(err);
    //   alert(err.response?.data?.message || "Signup failed");
    // }

  return (
    <div className="signup-wrapper">
    <div className="signup-container">
      <h1>Signup</h1>
      <p className="signup-subtitle">
          Start your investment journey with Zerodha
      </p>
      <form onSubmit={handleSubmit}>
        <div className="signup-input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-input-group">
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

          <div className="signup-input-group">
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

          <button type="submit" className="signup-submit">
            Sign Up
          </button>
      </form>
       <p className="signup-login">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>
    </div>
    </div>

  );
}

export default Signup;

