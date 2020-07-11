import  { MDBFooter, MDBIcon, MDBRow, MDBCol}  from "mdbreact";
import React from "react";

import "./Footer.css";


const Footer = (props) => (

  <MDBFooter className="foot blue darken-4">
  <div className="footer-copyright text-center py-3 px-3 pb-2">
  <MDBRow>
  
  <MDBCol md='1' className='d-flex justify-content-end'>
  <a href="#!" className="fb-ic mr-3 white-text">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="#!" className="tw-ic mr-3 white-text">
        <MDBIcon fab icon="twitter" />
      </a>
      <a href="#!" className="ins-ic mr-3 white-text">
        <MDBIcon fab icon="instagram" />
      </a>
      <a href="#!" className="yt-ic mr-3 white-text">
        <MDBIcon fab icon="youtube" />
      </a>
      </MDBCol>
  
      <MDBCol md='2' className='text-center d-flex align-items-center'>
 
      </MDBCol>

      <MDBCol md='2' className='text-center d-flex align-items-center'>
      </MDBCol>

      <MDBCol md='2' className='white-text'>
      info@PizzaTime.com
      </MDBCol>
  
      <MDBCol md='2' className='text-center d-flex align-items-center'>
      </MDBCol>
      
      <MDBCol md='1' className='text-center d-flex align-items-center'>
      </MDBCol>

      <MDBCol md='2' className='d-flex justify-content-end white-text'>
          &copy; {new Date().getFullYear()} Copyright: PizzaTime 
          </MDBCol>


          

        </MDBRow>
        
      </div>
      
      </MDBFooter>

  )

  export default Footer