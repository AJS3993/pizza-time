import {MDBRow, MDBCol, MDBCard, MDBBtn, MDBCardImage, MDBIcon, MDBContainer } from "mdbreact";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Banner from "../../components/Banner/Banner";
import Footer from "./../../components/Footer/Footer";
import "./MenuPage.css";
import { getAll } from "../../services2/services2"
import * as Services from '../../services2/services2';


class MenuPage extends Component {
  state = {
    menu: []
  }

  handleDeleteItem = async id => {
    await Services.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      menu: state.menu.filter(p => p._id !== id)
    }), () => this.props.history.push('/menu'));
  }


  async componentDidMount() {
    const menu = await getAll();
    // console.log(menu)
    this.setState({ menu });
  }

  render() {
    const { menu } = this.state
    // console.log(menu)

    return (
      <div className="MenuPage">
        <Banner />
        <MDBContainer>
        <MDBBtn className="border border-white white-text blue darken-4 w-100 rounded-bottom mb-5" rounded>
          <h2 className='p-0 m-0 font-weight-bold'>
            P i z z a s
          </h2>
        </MDBBtn>
        </MDBContainer>
<MDBContainer>

        <MDBRow className='w-80 d-flex justify-content-center'>

        {menu.map(item => (<MDBCol size="3">
          <MDBCard className='mb-4 blue darken-4 border border-white text-white'>
            
            <h2 className='d-flex justify-content-center'>{item.name}</h2>
            <MDBCardImage className="img-fluid border border-white" src="https://i.imgur.com/z8JExVW.png?1" waves />
            <h4 className='d-flex justify-content-center my-2'>{item.description}</h4>
            <h4 className='d-flex justify-content-center'>${item.price}</h4>
            
            
            
          
              
              <MDBRow>
                <MDBCol size='6'>
                  <Link to={{ pathname: '/edit', state: { 
                      name: item.name, 
                      description: item.description, 
                      price: item.price,
                      _id: item._id
                      }}} >
                    <MDBBtn rounded>
                      <MDBIcon icon="pen" />
                    </MDBBtn>
                  </Link>
                </MDBCol>
                <MDBCol size='6' className='d-flex justify-content-end'>
                  <MDBBtn rounded className='red darken-2 d-flex justify-content-center' onClick={() => this.handleDeleteItem(item._id)}>
                    <strong>X</strong>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>  
            

            </MDBCard>
          </MDBCol>
            ))}
          </MDBRow>
          </MDBContainer>
          <Footer/>
      </div>
    )
  }
}

export default MenuPage;