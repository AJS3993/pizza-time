import { MDBContainer, MDBRow, MDBCol, Card } from "mdbreact";
import React, { Component } from "react";
// import Login from "../../components/Login/Login";
import NavBar from "../../components/NavBar/NavBar";
import "./MenuPage.css";
// import menu from './../../components/MenuListItem/MenuListItem'
import MenuListItem from './../../components/MenuListItem/MenuListItem'
// import { render } from "@testing-library/react";
import {getAll} from "./../../Services/Services"

// const menu = [
//   {
//     name: "pepperoni",
//     description: 'A pizza with pepperoni',
//     price: '$9'
//   },
//   {
//     name: "cheeze",
//     description: 'A pizza with cheeze',
//     price: '$7'
//   }
// ];


  class MenuPage extends Component {
    state = {
      menu: []
    }

    async componentDidMount() {
      const menu = await getAll();
      console.log(menu)
      this.setState({ menu });
    }

    render() {
      const {menu} = this.state
      console.log(menu)

      return (
        <div className="MenuPage">
          <NavBar />
          <MDBContainer>
            <h1>Menu</h1>
            <MDBRow>
              <MDBCol className="col top" size="12"><Card><MenuListItem menu={menu} /></Card></MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      )
    }
  }

export default MenuPage;