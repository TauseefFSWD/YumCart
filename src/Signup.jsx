import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Import the CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://yumback.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1>Signup</h1>
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
          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>
        <p className="switch-form">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
