import  {MDBContainer, MDBRow, MDBCol, Card} from "mdbreact";
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
  <MDBCol className= "col top" size="12"><Card>.col-6</Card></MDBCol>
  </MDBRow>

  <MDBRow>
    <MDBCol className= "col" sm="4"><Card>.col-6</Card></MDBCol>
    <MDBCol className= "col" sm="4"><Card>.col-6</Card></MDBCol>
    <MDBCol className= "col" sm="4"><Card>.col-6</Card></MDBCol>
  </MDBRow>

</MDBContainer>


    </div>
  );
};

export default HomePage;