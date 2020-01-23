import  {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import React, {Component} from "react";
import NavBar from "../../components/NavBar/NavBar";


class OrderPage extends Component {
  

  render() {
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
}

export default OrderPage;