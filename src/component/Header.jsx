import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Select, Option } from "@material-tailwind/react";
import "./css/App.css"

class Header extends Component {
  render() {
    return (
      <div className="navigation text-[#4c4cf7] bg-black flex justify-between items-center px-4 h-24 max-w-[1240px mx-auto]">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <input
          className="bg-gray-300 rounded-md p-1 w-96"
          type="text"
          onChange={(e) => this.setState({ filterdata: e.target.value })}
          placeholder="search here"
        />
        <div className="flex headerr">
          <NavLink className="p-4" to="home">
            Home
          </NavLink>
          <NavLink className="p-4" to="services">
            Country List
          </NavLink>
          <NavLink className="p-4" to="about">
            About us
          </NavLink>
          <NavLink className="p-4" to="main">
            Main
          </NavLink>
          {/* <NavLink to='contact'>contact</NavLink> */}
        </div>
        <div className="w-72 text-blue-500">
          <Select label="Select by Country">
            <Option>Africa</Option>
            <Option>America</Option>
            <Option>Asia</Option>
            <Option>Europe</Option>
            <Option>Oceania</Option>
          </Select>
        </div>
      </div>
    );
  }
}
export default Header;
