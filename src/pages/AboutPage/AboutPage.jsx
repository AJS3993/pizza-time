import { MDBCard, MDBCardBody, MDBCardUp, MDBAvatar, MDBRow, MDBCol, MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "./../../components/Footer/Footer";
import "./AboutPage.css";


const AboutPage = () => {
  return (
    <div className="AboutPage">
        <Banner />
     
      <MDBContainer>


      <MDBRow>
        <MDBCol md='4'></MDBCol>
            <MDBCol md='8' className= "text-white text-center"><h1>About</h1></MDBCol>
        </MDBRow>

      <MDBRow>
      <MDBCol md='4'>
      <MDBCard testimonial className='border border-primary'>
          <MDBCardUp className='indigo blue-gradient' />
          <MDBAvatar className='mx-auto white'>
            <img
              src='https://i.imgur.com/yX4Sn9r.jpg'
              alt=''
            />
          </MDBAvatar>
          <MDBCardBody>
            <h4 className='card-title'>Andrew Smith</h4>
            <hr />
            <p>
            <MDBBtn size="lg" tag="a" href='https://www.linkedin.com/in/ajs3993/' floating social="li">
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" href='https://github.com/AJS3993' floating social="git">
        <MDBIcon fab icon="github" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" href='https://ajs3993.github.io/dev-portfolio/' floating social="email">
        <MDBIcon icon="envelope" />
      </MDBBtn>
            </p>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>

       
  
  
      
        <MDBCol md='8'>
            <h5 className='white-text'>Pizza Time is a tool for restaurant owners to create their menu and sell their food. Pizza Time is also for users to order food directly from the app. It was developed with Mongoose, Express, React, and Node. It is currently still a work in progress.</h5>
            <center>
  <h3 className='white-text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Made with:</u></h3>
      <ul className='white-text'>
        <li>React</li>
        <li>HTML/CSS/JS</li>
        <li>Node/Express</li>
        <li>MongoDB</li>
        <li>JSON Web Tokens</li>
      </ul>
      </center>
        </MDBCol>
        </MDBRow>
      </MDBContainer> 
      <br/>




      
      <Footer/>
    </div>
  );
};

export default AboutPage;