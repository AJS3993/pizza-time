import  {MDBContainer, MDBRow, MDBCol, Card} from "mdbreact";
import React from "react";
// import Login from "../../components/Login/Login";
import NavBar from "../../components/NavBar/NavBar";


const OrderPage = () => {
  return (
    <div className="OrderPage">
        <NavBar />
      <MDBContainer>
        <MDBRow>
            <MDBCol className= "col top" size="12"><Card>Order</Card></MDBCol>
        </MDBRow>
      </MDBContainer> 
    </div>
  );
};

export default OrderPage;