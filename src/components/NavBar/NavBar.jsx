import  {Nav, Navbar}  from 'react-bootstrap';
import React from "react";
import Login from "./../Login/Login";
// import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => (
    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Pizza Time</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#features">Menu</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="#profile">User Profile</Nav.Link>
    <Nav.Link href="#order">Order</Nav.Link>
    {/* <NavBar /> */}
      <Login user={props.user} handlelogout={props.handlelogout} />
    </Nav>
  </Navbar>
    </div>
  )

  export default NavBar