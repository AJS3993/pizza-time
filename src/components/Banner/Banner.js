import React from "react";
import { MDBJumbotron,  MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";


const Banner = () => {
  return (
   
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center py-0 blue darken-4 z-depth-3 border border-white border-top-0">
          <NavBar/>
            <MDBCardBody className='pb-0 py-1 px-0 '>
             <MDBRow>
              
             
               
             <MDBCol size="2" className="white-text py-0 d-flex justify-content-start">
             <Link className='link' to="/map"><MDBBtn className='hoverable border border-white' rounded color="red darken-4"><strong>Delivery/Carryout</strong></MDBBtn></Link>
                
                </MDBCol>

                <MDBCol size="2" className="white-text py-0">
                </MDBCol>

                <MDBCol size='4' className='d-flex justify-content-center white-text'>
                <h5 className="py-3 pb-0 font-weight-bold font-italic">It's Always Time for Pizza!</h5>
                 </MDBCol>
                
                
                <MDBCol size='1'>
                </MDBCol>

                <MDBCol size='3' className='d-flex justify-content-end white-text py-3'>
              
                <MDBIcon icon="shopping-cart" size='2x'/>
              
          </MDBCol>
             
          

              </MDBRow>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>

  )
}

export default Banner;