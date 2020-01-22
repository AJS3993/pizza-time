import  {Nav, Navbar}  from 'react-bootstrap';
import React from "react";
import Login from "./../Login/Login";
import { Link } from "react-router-dom";
// import MenuPage from "./../../pages/MenuPage/MenuPage"
import "./NavBar.css";

const NavBar = (props) => (
    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand><Link to="/">Pizza Time</Link></Navbar.Brand>
    <Nav className="mr-auto">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link to="/menu">Menu</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link to="/add">Add Food</Link></Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link><Link to="/profile">User Profile</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link to="/order">Order</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {/* <NavBar /> */}
      <Login user={props.user} handlelogout={props.handlelogout} />
    </Nav>
  </Navbar>
    </div>
  )

  export default NavBar