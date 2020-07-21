import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBIcon } from "mdbreact";
import React, { Component } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "./../../components/Footer/Footer";


class Cart extends Component {
  

  render() {
    
    const data =[
      {"name":"Cheese", "price":150, "number":1},
      {"name":"Pepperoni", "price":200, "number":2},
      {"name":"Pepperoni", "price":200, "number":1},
    ];
    
    
    

    return (
      <div >
        <Banner/>
        <MDBContainer>
        <MDBTable striped className='blue darken-4 border border-white white-text'>

        <MDBTableHead>
        <tr>
         
          <th><h3 className="text-left">Order</h3></th>
          
          <th className="px-5"><h3 className="text-center">number</h3></th>

          <th><h3 className="text-right">Price</h3></th>

          <th><h3 className="text-right">total</h3></th>
         
        </tr>
      </MDBTableHead>
      <MDBTableBody> 
        {data.map(d => (
      
       <tr>
          <td className="text-left"><h4>{d.name}</h4></td>
          
          <td className="text-center"><h1><MDBBtn className="font-weight-bold px-3" color="danger" rounded size="sm"><MDBIcon icon="plus" /></MDBBtn>{d.number}<MDBBtn className="font-weight-bold px-3" color="danger" rounded size="sm"><MDBIcon icon="minus" /></MDBBtn></h1></td>

          <td className="text-right"><h4>${(d.price/100).toFixed(2)}</h4></td>

          <td className="text-right"><h4>${(d.price*d.number/100).toFixed(2)}</h4></td>
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