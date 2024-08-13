import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Import the CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://yumback.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Save token to localStorage
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1>Login</h1>
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="switch-form">
          Don’t have an account? <a href="/signup">Signup</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
