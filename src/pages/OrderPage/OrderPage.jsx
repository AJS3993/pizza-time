import  {MDBContainer, MDBRow} from "mdbreact";
import React, {Component} from "react";
import NavBar from "../../components/NavBar/NavBar";


class OrderPage extends Component {
  
  state = {
    name: '',
    description: '',
    price: ''
  };


  render() {
    return (
    <div className="OrderPage">
        <NavBar />
        <br/>
    
      <MDBContainer>
        <MDBRow>
      
{this.state.name}

        </MDBRow>
        
       </MDBContainer> 

    </div>
       );
};
}

export default OrderPage;