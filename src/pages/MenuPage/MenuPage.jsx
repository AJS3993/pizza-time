import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBCardImage, MDBIcon } from "mdbreact";
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



        <MDBBtn className="border border-white white-text blue darken-4 w-100 rounded-bottom mb-5" rounded><h2 className='p-0 m-0 font-weight-bold'>P i z z a s</h2></MDBBtn>
  
          
          <MDBRow>

              {menu.map(item => (<MDBCol md="2">
                <MDBCard className='mb-4 blue darken-2 border border-white text-white'>
                  <MDBCardImage className="img-fluid" src="https://i.imgur.com/z8JExVW.png?1" waves />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
  <MDBRow>              
<MDBCol md='4'>

                  <Link
                    to={{
                      pathname: '/order',
                      state: { item }
                    }}
                  ><MDBBtn className='font-weight-bold red darken-2 hoverable' rounded>
                    ORDER
                    </MDBBtn>
                  </Link>

                  </MDBCol>
                  <MDBCol md='4'>

                  <Link
                    
                    to={{
                      pathname: '/edit',
                      state: { 
                        name: item.name, 
                        description: item.description, 
                        price: item.price,
                        _id: item._id
                      }}} >

                 <MDBBtn rounded><MDBIcon icon="pen" /></MDBBtn>
              </Link>
              </MDBCol>
              <MDBCol className='p-2 mx-n1' md='4'>
                  <MDBBtn rounded className='red darken-2 m-0' onClick={() => this.handleDeleteItem(item._id)}>
                  <MDBIcon icon="backspace" />
                  </MDBBtn>
                  </MDBCol>
                  </MDBRow>  
              </MDBCard>
             
            </MDBCol>
            
            ))}
          </MDBRow>
     
          <Footer/>
      </div>
    )
  }
}

export default MenuPage;