import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark nav-component">
      <Link to="/" className="navbar-brand">
        Recipes
      </Link>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/postrecipe/new" className="nav-link">
              Post
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/authors" className="nav-link">
              Authors
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
