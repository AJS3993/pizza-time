import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn } from "mdbreact";
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
          
          <MDBContainer>
          
          <MDBRow>

              {menu.map(item => (<MDBCol sm="4" className='col top' ><MDBCard>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>

                <div className='buttons'>

                  <Link
                    className='btn btn-xs btn-info'
                    to={{
                      pathname: '/order',
                      state: { item }
                    }}
                  >
                    ORDER
                  </Link>
                  <Link
                    className='btn btn-xs btn-warning'
                    to={{
                      pathname: '/edit',
                      state: { 
                        name: item.name, 
                        description: item.description, 
                        price: item.price,
                        _id: item._id
                      }
                    }}
                  >
                    EDIT
        </Link>

                  <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => this.handleDeleteItem(item._id)}
                  >
                    DELETE
        </button>

                </div>

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