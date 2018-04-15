
import React, { Component } from 'react';
//import { Navbar, button } from 'react-bootstrap';
//import './App.css';


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <nav className="blue">
        <a href="#" className="brand-logo left-align">Dolo</a>
          <div className="nav-wrapper right-align">

            <button
             className="is-info"
              onClick={this.goTo.bind(this, 'home')}
            >
              Auth0 Home
            </button>
            {
              !isAuthenticated() && (
                  <button
                  className="btn-small grey"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                   className="btn-small grey"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                   className="btn-small grey"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>
                )
            }
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
