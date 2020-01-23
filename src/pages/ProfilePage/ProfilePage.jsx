import  {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./ProfilePage.css";


const ProfilePage = () => {
  return (
    <div className="ProfilePage">
        <NavBar />
        <br/>
      <MDBContainer>
        <MDBRow>
            <MDBCol className= "col top" size="12"><h1>About</h1></MDBCol>
        </MDBRow>
  
  
        <br/>
        <MDBRow>
            <h5>Pizza Time is a tool for restaurant owners to create their menu and sell their food. Pizza Time is also a tool for users to order food directly from the app. It was developed with Mongoose, Express, React, and Node. It is currently still a work in progress.</h5>
        </MDBRow>
      </MDBContainer> 
      <br/>

<center>
  <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Made with:</u></h3>
      <ul>
        <li>React</li>
        <li>HTML/CSS/JS</li>
        <li>Node/Express</li>
        <li>MongoDB</li>
        <li>JSON Web Tokens</li>
      </ul>
      </center>
    </div>
  );
};

export default ProfilePage;