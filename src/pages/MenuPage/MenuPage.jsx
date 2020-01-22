import { MDBContainer, MDBRow, MDBCol, Card } from "mdbreact";
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";
import "./MenuPage.css";
// import menu from './../../components/MenuListItem/MenuListItem'
// import MenuListItemStuff from './../../components/MenuListItemStuff/MenuListItemStuff'
// import { render } from "@testing-library/react";
import {getAll} from "./../../Services/Services"
import * as Services from '../../Services/Services';


  class MenuPage extends Component {
    state = {
      menu: []
    }

    handleDeleteItem= async id => {
      await Services.deleteOne(id);
      this.setState(state => ({
        // Yay, filter returns a NEW array
        menu: state.menu.filter(p => p._id !== id)
      }), () => this.props.history.push('/menu'));
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
           
     
     
      <MDBCol className="col top" size="12">

      {menu.map(menu => (<Card>
        {menu.name} <br/>
        {menu.description} <br/>
       {menu.price} <br/>

       <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {menu}
          }}
        >
          EDIT
        </Link>

 <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => this.handleDeleteItem(menu._id)}
        >
          DELETE
        </button>
      </Card>
      ))}
      </MDBCol>
     
            </MDBRow>
             
          </MDBContainer>
          
        </div>
      )
    }
  }

export default MenuPage;