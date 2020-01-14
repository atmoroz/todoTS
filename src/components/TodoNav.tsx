import React from "react";
import { NavLink } from "react-router-dom";

export default class TodoNav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper p1 red lighten-1">
          <NavLink to="#" className="brand-logo">
            Logo
          </NavLink>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">List</NavLink>
            </li>
            <li>
              <NavLink to="/about">About </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
