import React from "react";

const Footer = ({ children }) => (
   <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Donation Location</strong> Copyright 2018  
            </p>
          
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-quarter">
              <ul>
                <li><strong>Web Site</strong></li>
                <li>
                  <a href="./signup.html" className="">Sign Up</a>
                </li>
                <li>
                    <a href="./login.html" className="">Log In</a>
                  </li>
                <li>
                  <a href="./about.html" className="">About Us</a></li>
                <li>
                  <a href="./about.html" className="">Meet the Team</a>
                </li>
              </ul>
            </div>
            <div className="column is-quarter">
              <ul>
                <li><strong>Social Links</strong></li>
                <li>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </li>
                <li>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                </li>
              </ul>
            </div>
            <div className="column is-quarter">
              <ul>
                <li><strong>Contact</strong></li>
                <li>+1 (361-944-05514)</li>
                <li>
                  <a href="mailto:contact@dolo.com">contact@donation_location.com</a>
                </li>
                <li>2405 Robert Dedman Dr. Austin, Texas, 78751</li>
              </ul>
            </div>
            </div>
          </div>
      </footer>
);

export default Footer;