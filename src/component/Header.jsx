import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.png"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
// import logo from "../component/img/logo.png";


class Header extends Component {
  render() {
    return (
      <div className="navigation text-[#4c4cf7] bg-black flex justify-between items-center px-4 h-24 max-w-[1240px mx-auto]">
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div className="flex">
          <NavLink className="p-4" to='home'>Home</NavLink>
          <NavLink className="p-4" to='services'>Country List</NavLink>
          <NavLink className="p-4" to='about'>About us</NavLink>
          <NavLink className="p-4" to='main'>Main</NavLink>
          {/* <NavLink to='contact'>contact</NavLink> */}
        </div>
      </div>
    );
  }
}
export default Header;
