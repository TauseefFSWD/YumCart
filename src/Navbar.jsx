import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profilePhoto from "./assets/1.webp"; // Adjust the path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="profile-container">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
          <h1 className="page-title">YumCart</h1>
        </div>
        <button className="menu-button" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-home">
            <Link to="/">Home</Link>
          </li>
          <div className="nav-links-right">
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
