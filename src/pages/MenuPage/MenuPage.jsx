import  {MDBContainer, MDBRow, MDBCol, Card} from "mdbreact";
import React from "react";
// import Login from "../../components/Login/Login";
import NavBar from "../../components/NavBar/NavBar";
import "./MenuPage.css";
// import menu from './../../components/MenuListItem/MenuListItem'
import MenuListItem from './../../components/MenuListItem/MenuListItem'

const menu = [
  {
    name: "pepperoni",
    description: 'A pizza with pepperoni',
    price: '$9'
  },
  {
    name: "cheeze",
    description: 'A pizza with cheeze',
    price: '$7'
  }
];

const MenuPage = () => {
  return (
    <div className="MenuPage">
      <NavBar />
        <MDBContainer> 
          <MDBRow>
            <MDBCol className= "col top" size="12"><Card><MenuListItem menu={menu}/></Card></MDBCol>
          </MDBRow>
        </MDBContainer> 
    </div>
  );
};

export default MenuPage;