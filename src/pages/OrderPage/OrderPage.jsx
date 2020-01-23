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
     
     {/* {order.map(item => (<Card>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
                </Card>
))}; */}
    </div>
  );
};

export default OrderPage;