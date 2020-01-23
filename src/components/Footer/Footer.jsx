import  {MDBContainer, MDBFooter}  from "mdbreact";
import React from "react";
import "./Footer.css";


const Footer = (props) => (

  <MDBFooter className="foot">
  <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: PizzaTime
        </MDBContainer>
      </div>
      </MDBFooter>

  )

  export default Footer