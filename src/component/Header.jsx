import React, { Component } from "react";
import "../css/Header.css";
import logo from "../img/logo.png";
class Header extends Component {
  render() {
    return (
      <div className="navigation">
        <div>
          <img src={logo} />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About us</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
