
import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBBtn, MDBBtnGroup, MDBIcon } from "mdbreact";
import Login from "./../Login/Login";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => (

      <MDBNavbar className='z-depth-3 border border-dark border-top-0 rounded' color="red darken-4" dark expand="md">
    <MDBNavbarBrand ><strong><Link className='white-text font-italic' to="/"><MDBIcon icon="pizza-slice" /><h3 className="font-weight-bold">Pizza Time</h3></Link></strong></MDBNavbarBrand>
    <MDBNavbarNav left>
    <MDBBtnGroup>
    <MDBBtn className='red darken-4'><Link className='link' to="/menu"><h5 className="font-weight-bold white-text">Menu</h5></Link></MDBBtn>
    <MDBBtn className='red darken-4'><Link className='link' to="/add"><h5 className="font-weight-bold white-text">Add Food</h5></Link></MDBBtn>
    </MDBBtnGroup>
    </MDBNavbarNav>
    
    <MDBNavbarNav right>
    <MDBBtnGroup>
    <MDBBtn className='red darken-4'><Link className='link' to="/about"><h5 className="font-weight-bold white-text">About</h5></Link></MDBBtn>
    <MDBBtn className='red darken-4'><Link className='link' to="/order"><h5 className="font-weight-bold white-text">Order</h5></Link></MDBBtn>
    </MDBBtnGroup>
    </MDBNavbarNav>
  
    <MDBNavItem>
      <Login user={props.user} handlelogout={props.handlelogout} />
      </MDBNavItem>
      
  </MDBNavbar>
   
  )

  export default NavBar