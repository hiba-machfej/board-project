import React from "react";
import { Nav,Navbar } from "react-bootstrap";
import {  NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <Navbar className="navStyle">
      {/* <Navbar.Brand to="/home">Navbar</Navbar.Brand> */}
      <Nav className="mr-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>

        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
    </Navbar>
  );
};

export default SideNav;
