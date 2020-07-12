import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdbreact';

// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: ""
  };

  handleChange = e => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // let <App> know a user has signedup
      this.props.handleSignuporLogin();
      // Successfully signed up - show GamePage
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (

        <MDBContainer className='h-100 d-flex justify-content-center align-items-center'>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
              
              <MDBRow>
                <MDBCol md='12' className='m-3 mx-auto'>
                  <MDBCard>
                    <MDBCardBody>
                      <h2 className='font-weight-bold my-4 text-center mb-5 mt-4 font-weight-bold'>
                        <strong>REGISTER</strong>
                      </h2>
                      <hr />
                      <MDBRow className='mt-5'>
                       
                        <MDBCol md='12'>
                          <MDBRow className=' d-flex justify-content-center'>
                            <h4 className='mt-3 mr-4'>
                              <strong>Login with</strong>
                            </h4>
                            <div className='inline-ul text-center d-flex justify-content-center'>
                              <a href='!#'>
                                <MDBIcon
                                  fab
                                  icon='twitter'
                                  size='3x'
                                  className='p-2 m-2 indigo-text tw-ic'
                                />
                              </a>
                              <a href='!#'>
                                <MDBIcon
                                  fab
                                  size='3x'
                                  icon='facebook'
                                  className='p-2 m-2 fa-lg li-ic indigo-text'
                                />
                              </a>
                              <a href='!#'>
                                <MDBIcon
                                  fab
                                  size='3x'
                                  icon='instagram'
                                  className='p-2 m-2 fa-lg ins-ic indigo-text'
                                />
                              </a>
                            </div>
                            
                     
                              <MDBCol md='12'>
                            <h2 className='text-center mb-3 '>
                             or:
                            </h2>
                            </MDBCol>

                            <MDBCol md='12'>
                            <h2 className='font-weight-bold text-center'>
                             Sign Up
                            </h2>
                            </MDBCol>
                         
                          </MDBRow>
                          
                          <MDBInput 
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          value={this.state.name}
                          name="name"
                          onChange={this.handleChange}
                          icon='user' />
                          
                          
                          <MDBInput
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleChange}
                            icon='envelope'
                          />

                          <MDBInput 
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={this.state.password}
                          name="password"
                          onChange={this.handleChange}
                          icon='lock'
                          />

                          <MDBInput
                             type="password"
                             className="form-control"
                             placeholder="Confirm Password"
                             value={this.state.passwordConf}
                             name="passwordConf"
                             onChange={this.handleChange}
                            icon='lock'
                          />

                          


                          <div className='text-center'>
                    
                            <button
                className="btn blue darken-2 text-white"
                disabled={this.isFormInvalid()}
                
              >
                Sign Up
              </button>
              &nbsp;&nbsp;
              <Link to="/">Cancel</Link>


                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              </form>
            </MDBContainer>






    );
  }
}

export default SignupForm;