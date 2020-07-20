
import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBBtn, MDBBtnGroup, MDBIcon } from "mdbreact";
import Login from "./../Login/Login";
import { Link } from "react-router-dom";
import './Button.scss';

const NavBar = (props) => (

      <MDBNavbar className='z-depth-3 border border-dark border-top-0 rounded' color="red darken-4" dark expand="md">
    <MDBNavbarBrand ><strong><Link className='white-text font-italic' to="/"><MDBIcon icon="pizza-slice" /><h3 className="font-weight-bold">Pizza Time</h3></Link></strong></MDBNavbarBrand>
    <MDBNavbarNav left>
    <MDBBtnGroup>
    <Link className='link' to="/menu"><MDBBtn className='red darken-4'><h5 className="font-weight-bold white-text">Edit Menu</h5></MDBBtn></Link>
    <Link className='link' to="/add"><MDBBtn className='red darken-4'><h5 className="font-weight-bold white-text">Add Food</h5></MDBBtn></Link>
    </MDBBtnGroup>
    </MDBNavbarNav>
    
    <MDBNavbarNav right>
    <MDBBtnGroup>
    <Link className='link' to="/about"><MDBBtn className='red darken-4'><h5 className="font-weight-bold white-text">About</h5></MDBBtn></Link>
  <Link className='link' to="/order">  <MDBBtn className='red darken-4'><h5 className="font-weight-bold white-text">Order</h5></MDBBtn></Link>
    </MDBBtnGroup>
    </MDBNavbarNav>
  
    <MDBNavItem>
      <Login user={props.user} handlelogout={props.handlelogout} />
      </MDBNavItem>
      
  </MDBNavbar>
   
  )

  export default NavBar