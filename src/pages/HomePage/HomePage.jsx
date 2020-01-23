import  {MDBContainer, MDBRow, MDBCol, Card} from "mdbreact";
import React from "react";
// import Login from "../../components/Login/Login";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";

const HomePage = props => {
  return (
    <div className="HomePage">

<NavBar />

      <MDBContainer>

  <MDBRow>
  <MDBCol className= "col top" size="12"><Card><img alt='pizza' src='https://mobile-cuisine.com/wp-content/uploads/2012/11/pizza-fun-facts.jpg'/></Card></MDBCol>
  </MDBRow>

  <MDBRow>
    <MDBCol className= "col" sm="4"><Card></Card></MDBCol>
    <MDBCol className= "col" sm="4"><Card></Card></MDBCol>
    <MDBCol className= "col" sm="4"><Card></Card></MDBCol>
  </MDBRow>

</MDBContainer>


    </div>
  );
};

export default HomePage;