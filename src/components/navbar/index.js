import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link to="/play" className="navbar-brand" href="#">
            Main title
          </Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
          </div>
        </nav>
      </header>
    );
  }
}
