import  {MDBContainer, MDBRow} from "mdbreact";
import React, {Component} from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "./../../components/Footer/Footer";


class OrderPage extends Component {
  
  state = {
    name: '',
    description: '',
    price: ''
  };


  render() {
    return (
    <div className="OrderPage">
        <Banner />
        <br/>
    
      <MDBContainer>
        <MDBRow>
      
{this.state.name}

        </MDBRow>
        
       </MDBContainer> 
       <Footer/>
    </div>
       );
};
}

export default OrderPage;