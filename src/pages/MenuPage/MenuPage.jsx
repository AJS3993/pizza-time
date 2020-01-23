import { MDBContainer, MDBRow, MDBCol, Card } from "mdbreact";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";
import "./MenuPage.css";
import { getAll } from "./../../Services/Services"
import * as Services from '../../Services/Services';


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
    console.log(menu)
    this.setState({ menu });
  }

  render() {
    const { menu } = this.state
    console.log(menu)

    return (
      <div className="MenuPage">
        <NavBar />

        <MDBContainer>
          <h1>Menu</h1>
          <MDBRow>



            <MDBCol className="col top" size="12">

              {menu.map(item => (<Card>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>

                <div className='buttons'>

                  <Link
                    className='btn btn-xs btn-info'
                    to={{
                      pathname: '/order',
                      state: {  }
                    }}
                  >
                    ADD
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