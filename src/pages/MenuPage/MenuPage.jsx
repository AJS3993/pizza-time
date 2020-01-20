import  {MDBContainer, MDBRow, MDBCol, Card} from "mdbreact";
import React from "react";
// import Login from "../../components/Login/Login";
import NavBar from "../../components/NavBar/NavBar";
import "./MenuPage.css";

const MenuPage = () => {
  return (
    <div className="MenuPage">
      <NavBar />
        <MDBContainer>
          <MDBRow>
            <MDBCol className= "col top" size="12"><Card>Menu</Card></MDBCol>
          </MDBRow>
        </MDBContainer> 
    </div>
  );
};

export default MenuPage;