import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import userService from "../../utils/userService";
import Banner from "../../components/Banner/Banner";
import Footer from "./../../components/Footer/Footer";
import  {MDBContainer, MDBIcon, MDBInput, MDBCard, MDBCol, MDBRow, MDBCardBody, MDBBtn,} from "mdbreact";


class LoginPage extends Component {
  state = {
    email: "",
    pw: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // let <App> know a user has signedup
      this.props.handleSignuporLogin();
      // Successfully signed up - show GamePage
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert("Invalid Credentrails!");
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <Banner />
   
            <MDBContainer className='mb-4'>
              <form onSubmit={this.handleSubmit}>
              <MDBRow>
                <MDBCol md='10' lg='6' xl='5' sm='12' className='mt-5 mx-auto'>
                  <MDBCard>
                    <MDBCardBody>
                      <div className='form-header blue-gradient'>
                        <h3>
                          <MDBIcon
                            icon='user'
                            className='mt-2 mb-2 text-white'
                          />{' '}
                          Log in:
                        </h3>
                      </div>
                      
                      <MDBInput
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                        icon='envelope'
                        iconClass='white-text'
                      />
                      <MDBInput
                         type="password"
                         className="form-control"
                         placeholder="Password"
                         value={this.state.pw}
                         name="pw"
                         onChange={this.handleChange}
                        icon='lock'
                        iconClass='white-text'
                      />
                      <div className='text-center mt-3 black-text'>
                      <button className="btn blue darken-2 text-white">Log In</button>
                      &nbsp;&nbsp;&nbsp;
                      <Link to="/">Cancel</Link>
                        <hr />
                      </div>
                      <div className='inline-ul text-center d-flex justify-content-center'>
                        <a href='!#'>
                          <MDBIcon
                            fab
                            icon='twitter'
                            size='lg'
                            className='p-2 m-2 blue-text'
                          />
                        </a>
                        <a href='!#'>
                          <MDBIcon
                            fab
                            icon='facebook'
                            size='lg'
                            className='p-2 m-2 blue-text'
                          />{' '}
                        </a>
                        <a href='!#'>
                          <MDBIcon
                            fab
                            icon='instagram'
                            size='lg'
                            className='p-2 m-2 blue-text'
                          />
                        </a>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              </form>
            </MDBContainer>
    



   
        <Footer/>
      </div>
      
    );
  }
}

export default LoginPage;