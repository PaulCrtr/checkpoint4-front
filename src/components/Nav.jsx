import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" class="navbar-brand">
        Recipes
      </Link>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/postrecipe" class="nav-link">
              Post
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/About" class="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
