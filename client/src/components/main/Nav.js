import React from "react";
import { Link } from "react-router-dom";


document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-dolo" elements
  var $navbarDolo = Array.prototype.slice.call(document.querySelectorAll('.navbar-dolo'), 0);

  // Check if there are any navbar burgers
  if ($navbarDolo.length > 0) {

    // Add a click event on each of them
    $navbarDolo.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-dolo" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});



const Nav = () => (
<div class="hero-head is-light">

<nav className="navbar border-shadow">
<div class="container">
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      <img src="../../images/dolo.png" alt="Dolo" />
    </Link>
    <div className="navbar-burger burger" data-target="navbarMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarMenu" className="navbar-menu">
    <div className="navbar-end">
      <Link className={window.location.pathname === "/" ? "active navbar-item" : "navbar-item"} 
        to="/">
        Home
      </Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-item">
          Donors
        </a>
        <div className="navbar-dropdown">
          <Link className={window.location.pathname === "/donations" ? "active navbar-item" : "navbar-item"}
           to="/donations">
            My Donations
          </Link>
          <Link className={window.location.pathname === "/search-needs" ? "active navbar-item" : "navbar-item"}
           to="/search-needs">
            Search Organizations' Needs
          </Link>
        </div>
      </div>

       <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-item">
          Organizations
        </a>
        <div className="navbar-dropdown">
          <Link className={window.location.pathname === "/needs" ? "active navbar-item" : "navbar-item"}
           to="/needs">
            My Needs
          </Link>
          <Link className={window.location.pathname === "/search-donations" ? "active navbar-item" : "navbar-item"}
           to="/search-donations">
            Search Donations
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

    {/* <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank"rel="noopener noreferrer" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.6.2/bulma-0.6.2.zip">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div> */}
    </div>

</nav>
</div>

);

export default Nav;


