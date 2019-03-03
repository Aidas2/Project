import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/home.png";

class SideBarComponent extends Component {
  render() {
    return (
      <div className="sidebar-style">
        <nav>
          <input type="checkbox" id="side-bar-box" />
          <label id="side-bar-container" for="side-bar-box">
            <div id="button" className="navigation-bar-press-line">
              <img
                src={logo}
                width="150"
                height="10"
                className="side-bar-logo"
              />

              <ul id="side-bar-appear" className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <Link to={"/docs"} className="nav-link ">
                    Dokumentai
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/upload"} className="nav-link ">
                    Dokumento įkėlimas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/history"} className="nav-link ">
                    Istorija
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link ">
                    Administratoriaus rolė
                  </Link>
                </li>
              </ul>
            </div>
          </label>
        </nav>
      </div>
    );
  }
}

export default SideBarComponent;