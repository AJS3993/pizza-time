import  {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";


const OrderPage = () => {
  return (
    <div className="OrderPage">
        <NavBar />
        <br/>
      <MDBContainer>
        <MDBRow>
            <MDBCol className= "col top" size="12"><h1>Order</h1></MDBCol>
        </MDBRow>
      </MDBContainer> 
      
    </div>
  );
};

export default OrderPage;