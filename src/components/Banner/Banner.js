import React from "react";
import { MDBJumbotron,  MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBBtn } from "mdbreact";
import NavBar from "../../components/NavBar/NavBar";

const Banner = () => {
  return (
   
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center py-0 blue darken-4 z-depth-3 border border-white">
          <NavBar/>
            <MDBCardBody className='pb-0 py-1 px-0 '>
             <MDBRow>
              
               
             <MDBCol md="3" className="white-text py-0 d-flex justify-content-start">
                <MDBBtn className='hoverable border border-white' rounded color="red darken-4"><strong>Delivery</strong></MDBBtn>
                <MDBBtn className='hoverable border border-white' rounded color="red darken-4"><strong>Carryout</strong></MDBBtn>
                </MDBCol>

                

                

                <MDBCol md="2" className="white-text py-0">
                </MDBCol>

                <MDBCol md='2' className='d-flex justify-content-center white-text'>
                <h5 className="py-3 pb-0 font-weight-bold font-italic">It's Always Time for Pizza!</h5>
                 </MDBCol>
                
                
                <MDBCol md='3'>
                </MDBCol>

                <MDBCol md='2' className='d-flex justify-content-end white-text py-3'>
              
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