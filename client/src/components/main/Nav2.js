import React from "react";
import { Link } from "react-router-dom";


const Nav = () => (

<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <Link class="navbar-item" to="/">
      <img src="../../images/dolo.png" alt="Dolo" />
    </Link>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

           



  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <Link className={window.location.pathname === "/" ? "active navbar-item" : "navbar-item"} 
        to="https://bulma.io/">
        Home
      </Link>
      <div class="navbar-item has-dropdown is-hoverable">
        <li class="navbar-link">
          Donor Links
        </li>
        <div class="navbar-dropdown is-boxed">
          <Link className={window.location.pathname === "/donations" ? "active navbar-item" : "navbar-item"}
           to="/donations">
            Donations
          </Link>
          <Link className={window.location.pathname === "/search-needs" ? "active navbar-item" : "navbar-item"}
           to="/search-needs">
            Search Org Needs
          </Link>
        </div>
      </div>

       <div class="navbar-item has-dropdown is-hoverable">
        <li class="navbar-link">
          Org Links
        </li>
        <div class="navbar-dropdown is-boxed">
          <Link className={window.location.pathname === "/needs" ? "active navbar-item" : "navbar-item"}
           to="/needs">
            Donations
          </Link>
          <Link className={window.location.pathname === "/search-donations" ? "active navbar-item" : "navbar-item"}
           to="/search-donations">
            Search Org Needs
          </Link>
        </div>
      </div>

      <Link className={window.location.pathname === "/about" ? "active navbar-item" : "navbar-item"}
        to="/about">
        About Dolo
      </Link>

      <Link className={window.location.pathname === "/contact" ? "active navbar-item" : "navbar-item"}
        to="contact">
        Contact
      </Link>
    </div>
   
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.6.2/bulma-0.6.2.zip">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
 
</nav>

);

export default Nav;


