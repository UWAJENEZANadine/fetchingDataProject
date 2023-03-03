import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../component/img/logo.png";


class Header extends Component {
  render() {
    return (
      <div className="navigation">
        <NavLink to='home'>Home</NavLink>
        <NavLink to='services'>Servives</NavLink>
        <NavLink to='about'>About us</NavLink>
        <NavLink to='main'>Main</NavLink>
        {/* <NavLink to='contact'>contact</NavLink> */}
      </div>
    );
  }
}
export default Header;
