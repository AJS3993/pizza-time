
import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBMask,
   MDBView } from "mdbreact";
import Login from "./../Login/Login";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => (

      <MDBNavbar className='z-depth-3' color="red darken-4" dark expand="md">
    <MDBNavbarBrand ><strong><Link className='white-text font-italic' to="/"><h2 className="font-weight-bold">Pizza Time</h2></Link></strong></MDBNavbarBrand>
    <MDBNavbarNav left>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link className='link' to="/menu"><h5 className="font-weight-bold">Menu</h5></Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <MDBView rounded hover><MDBNavItem><Link className='link' to="/add"><h5 className="font-weight-bold">Add Food</h5></Link></MDBNavItem></MDBView>
    </MDBNavbarNav>
    
    <MDBNavbarNav right>
    <MDBView rounded hover><MDBNavItem><Link className='link' to="/profile"><h5 className="font-weight-bold">About</h5></Link></MDBNavItem></MDBView>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <MDBView rounded hover><MDBNavItem><Link className='link' to="/order"><h5 className="font-weight-bold">Order</h5></Link></MDBNavItem></MDBView>
    </MDBNavbarNav>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {/* <NavBar /> */}
    <MDBNavItem>
      <Login user={props.user} handlelogout={props.handlelogout} />
      </MDBNavItem>
      
  </MDBNavbar>
   
  )

  export default NavBar