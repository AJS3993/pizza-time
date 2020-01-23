import  {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import React from "react";
// import Login from "../../components/Login/Login";
import NavBar from "../../components/NavBar/NavBar";


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
            <MDBCol className= "col top" size="12">Pizza Time is a tool for restaurant owners to create their menu and sell their food. Pizza Time is also a tool for users to order food directly from the app.</MDBCol>
        </MDBRow>
      </MDBContainer> 
    </div>
  );
};

export default ProfilePage;