import  {MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardBody, MDBCardImage, MDBCardText, MDBCardGroup, MDBBtn, MDBContainer, MDBView} from "mdbreact";
import React from "react";
import Banner from "../../components/Banner/Banner";
import "./HomePage.css";
import Footer from "./../../components/Footer/Footer"

const HomePage = props => {
  return (
    <div className="HomePage">

<Banner/>

  <MDBRow >

  <MDBCardGroup className='pb-5'>
  
  <MDBCol sm='1'>
      </MDBCol>
      
     
      

      <MDBCol md='6 p-4 pb-5'>
      <MDBCard wide cascade className='h-75 pb-5'>
      <MDBView className='z-depth-4' cascade>
        <MDBCardImage src="https://i.imgur.com/kpadyPP.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        </MDBView>
        <MDBCardBody className='d-inline z-depth-4 p-4 mb-5' cascade>
          <MDBCardTitle tag="h5">Pizzas</MDBCardTitle>
          <MDBCardText>
          Try one of our delicious specialty pizzas and find your new favorite. You love pizza, we love pizza - it's a perfect fit. 
          
          </MDBCardText>
          <MDBBtn className='d-inline m-1 float-right font-weight-bold blue darken-2 hoverable' rounded>
            Order Now
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='card-image p-4 z-depth-4' style={{
            backgroundImage:
              "url('https://i.imgur.com/PmAVnc3.jpg')"
          }} rounded>
             <MDBContainer className='d-flex justify-content-center p-4'>
      
              <MDBBtn className='d-flex justify-content-center red darken-2' rounded>
                Customize Your Pizza 
              </MDBBtn>
              </MDBContainer>
        </MDBCard>
      </MDBCol>

     
      

      <MDBCol md='4'>
      <MDBCard wide cascade className='py-3 h-50'>
      <MDBView className='z-depth-4' cascade>
        <MDBCardImage src="https://i.imgur.com/8rpkJAz.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
          </MDBView>
          <MDBCardBody className='d-inline z-depth-4' cascade>
          <MDBCardTitle tag="h5">Sides</MDBCardTitle>
          <MDBCardText>
          Try one of our delicious specialty pizzas and find your new favorite. You love pizza, we love pizza - it's a perfect fit. 
          
          </MDBCardText>
          <MDBBtn className='d-inline m-1 float-right font-weight-bold blue darken-2 hoverable' rounded>
            Order Now
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
     
      <MDBCard wide cascade className='py-3 h-50'>
      <MDBView className='z-depth-4' cascade>
        <MDBCardImage src="https://i.imgur.com/cqnGwSg.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight"/>
          </MDBView>
          <MDBCardBody className='d-inline z-depth-4' cascade>
          <MDBCardTitle tag="h5">Desserts</MDBCardTitle>
          <MDBCardText>
          Try one of our delicious specialty pizzas and find your new favorite. You love pizza, we love pizza - it's a perfect fit. 
          
          </MDBCardText>
          <MDBBtn className='d-inline m-1 float-right font-weight-bold blue darken-2 hoverable' rounded>
            Order Now
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      
      <MDBCol sm='1'>
      </MDBCol>
      

    </MDBCardGroup>
 

      </MDBRow>
 
<Footer />
    </div>
  );
};

export default HomePage;