import  {Nav, Navbar}  from 'react-bootstrap';
import React from "react";
import Login from "./../Login/Login";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => (
    <div>
      <Navbar bg="danger" variant="dark">
    <Navbar.Brand><Link className='logo' to="/">Pizza Time</Link></Navbar.Brand>
    <Nav className="mr-auto">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link className='link' to="/menu">Menu</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link className='link' to="/add">Add Food</Link></Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link><Link className='link' to="/profile">About</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link className='link' to="/order">Order</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {/* <NavBar /> */}
      <Login user={props.user} handlelogout={props.handlelogout} />
    </Nav>
  </Navbar>
    </div>
  )

  export default NavBar