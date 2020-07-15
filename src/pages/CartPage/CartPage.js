import {MDBRow, MDBCol, MDBCard, MDBBtn, MDBContainer } from "mdbreact";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Banner from "../../components/Banner/Banner";
import Footer from "./../../components/Footer/Footer";
import { getAll } from "../../services2/services2"
import * as Services from '../../services2/services2';


class Cart extends Component {
  

  render() {
    
    const data =[
      {"name":"test1"},
      {"name":"test2"}
    ];
    
    
 

    return (
      <div>
        <Banner/>
        {data.map(d => (<h1>{d.name}</h1>))}
      <Footer />
      </div>
    );
  }
}

export default Cart;