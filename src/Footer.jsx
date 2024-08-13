import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 YumCart. Tauseef Shaikh. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://github.com/TauseefFSWD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/tauseef-akbar-a332521b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/shaikh_tauseef832/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
