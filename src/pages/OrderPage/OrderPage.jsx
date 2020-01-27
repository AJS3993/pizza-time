import  {MDBContainer, MDBRow} from "mdbreact";
import React, {Component} from "react";
import NavBar from "../../components/NavBar/NavBar";


class OrderPage extends Component {
  
  order = [1,2]


  render() {
    return (
    <div className="OrderPage">
        <NavBar />
        <br/>
    
      <MDBContainer>
        <MDBRow>
      
{this.order}

        </MDBRow>
        
       </MDBContainer> 

    </div>
       );
};
}

export default OrderPage;