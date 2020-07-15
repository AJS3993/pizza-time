import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from "mdbreact";
import React, { Component } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "./../../components/Footer/Footer";


class Cart extends Component {
  

  render() {
    
    const data =[
      {"name":"test1",
      "price":"$1.50",
      "number":"1"},
      {"name":"test2",
      "price":"$2.00",
      "number":"1"},
    ];
    
    
    

    return (
      <div >
        <Banner/>
        <MDBContainer>
        <MDBTable striped >

        <MDBTableHead>
        <tr>
         
          <th><h3 className="text-left">Order</h3></th>
          
          

          <th className="px-5"><h3 className="text-center">number</h3></th>

          <th><h3 className="text-right">Price</h3></th>
         
        </tr>
      </MDBTableHead>
      <MDBTableBody> 
        {data.map(d => (
      
       <tr>
          <td className="text-left"><h4>{d.name}</h4></td>
          
          <td className="text-center"><h4><MDBBtn className="font-weight-bold px-3" color="primary" rounded size="sm">+</MDBBtn>{d.number}<MDBBtn className="font-weight-bold px-3" color="primary" rounded size="sm">-</MDBBtn></h4></td>

          <td className="text-right"><h4>{d.price}</h4></td>
        </tr>
         ))}
          </MDBTableBody>
          </MDBTable>
          </MDBContainer>
      
      
      <Footer />
      </div>
    );
  }
}

export default Cart;