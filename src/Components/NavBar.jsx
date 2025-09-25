import React, { Component } from "react";

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <ul className="nav nav-underline bg-dark">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              NewsMonkey
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Category
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
