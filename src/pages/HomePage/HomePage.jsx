import  {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import React from "react";
// import Login from "../../components/Login/Login";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";

const HomePage = props => {
  return (
    <div className="HomePage">

<NavBar />
      {/* <Login user={props.user} handlelogout={props.handlelogout} /> */}

      <MDBContainer>
  <MDBRow>
    <MDBCol className= "col" size="12">.col-6</MDBCol>
  </MDBRow>

  <MDBRow>
    <MDBCol className= "col" sm="4">.col-sm-4</MDBCol>
    <MDBCol className= "col" sm="4">.col-sm-4</MDBCol>
    <MDBCol className= "col" sm="4">.col-sm-4</MDBCol>
  </MDBRow>

</MDBContainer>


    </div>
  );
};

export default HomePage;