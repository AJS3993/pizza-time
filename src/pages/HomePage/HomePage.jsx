import  {MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardBody, MDBCardImage, MDBCardText, MDBCardGroup, MDBBtn, MDBContainer, MDBView, MDBIcon} from "mdbreact";
import React from "react";
import Banner from "../../components/Banner/Banner";
import "./HomePage.css";
import Footer from "./../../components/Footer/Footer";

const HomePage = props => {
  return (
    <div className="HomePage">

<Banner/>

  <MDBRow className='d-flex justify-content-center'>

  <MDBCardGroup className='w-100 d-flex justify-content-center'>

      
     
      

      <MDBCol md='7 ml-5'>
      <MDBCard wide cascade className='h-45'>
      <MDBBtn className="d-inline float-left border border-white white-text blue darken-4 w-100 m-3 ml-n3 rounded-bottom" rounded><h2 className='p-0 m-0 font-weight-bold'>P i z z a s</h2></MDBBtn>
      <MDBView className='z-depth-4 h-50 border border-primary' cascade>

      
        <MDBCardImage src="https://i.imgur.com/ycDjMqn.png" alt="MDBCard image cap" top hover
          overlay="white-slight" />
 
        </MDBView>
       
      </MDBCard>

      <MDBCard collection className="z-depth-1-half border border-white">
            <div className="view zoom blue darken-2">
          
              <img
                src="https://i.imgur.com/z8JExVW.png?1"
                className="d-inline float-right img-fluid w-50"
                alt=""
              />
               <h5 className='w-50 d-inline float-left white-text p-4'>Try one of our delicious specialty pizzas and find your new favorite. Customize any size pizza with your favorite toppings, cheese and sauce. You love pizza, we love pizza - it's a perfect fit.</h5>
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Pizzas <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
     

      <MDBCard className='card-image p-5 z-depth-4 border border-primary my-5' style={{
            backgroundImage:
              "url('https://i.imgur.com/PmAVnc3.jpg')"
          }} rounded>
             <MDBContainer className='d-flex justify-content-center p-5'>
      
              <MDBBtn className='d-flex justify-content-center font-weight-bold red darken-2' rounded>
                Customize Your Pizza 
              </MDBBtn>
              </MDBContainer>
        </MDBCard>
      </MDBCol>

     
      

      <MDBCol md='4'>
      <MDBCard wide cascade className='h-45'>
      <MDBBtn className="white-text blue darken-4 w-100 m-3 rounded-bottom border border-white" rounded><h2 className='p-0 m-0 font-weight-bold'>and More</h2></MDBBtn>
      <MDBView className='z-depth-4 border border-primary' cascade>
        <MDBCardImage src="https://i.imgur.com/8rpkJAz.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
          </MDBView>
          <MDBCardBody className='z-depth-4 blue darken-2 white-text h-50 border border-white border-top-0' cascade>
          <MDBCardTitle tag="h5">Sides</MDBCardTitle>
          <MDBCardText className='white-text'>
          Try one of our delicious specialty pizzas and find your new favorite. You love pizza, we love pizza - it's a perfect fit. 
          
          </MDBCardText>
          <MDBBtn className='d-inline float-right font-weight-bold red darken-2 hoverable' rounded>
            Order Now
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
     
      <MDBCard wide cascade className='py-3 h-45'>
      <MDBView className='z-depth-4 border border-primary' cascade>
        <MDBCardImage src="https://i.imgur.com/cqnGwSg.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight"/>
          </MDBView>
          <MDBCardBody className='z-depth-4 blue darken-2 white-text h-50 border border-white border-top-0' cascade>
          <MDBCardTitle tag="h5">Desserts</MDBCardTitle>
          <MDBCardText className='white-text'>
          Try one of our delicious specialty pizzas and find your new favorite. You love pizza, we love pizza - it's a perfect fit. 
          
          </MDBCardText>
          <MDBBtn className='d-inline m-1 float-right font-weight-bold red darken-2 hoverable' rounded>
            Order Now
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      
   
      

    </MDBCardGroup>
 

      </MDBRow>

     
        
 
<Footer />
    </div>
  );
};

export default HomePage;