
import React, {Component} from 'react';
import  {MDBContainer, MDBIcon, MDBInput, MDBCard, MDBCol, MDBRow, MDBCardBody, Link, MDBInputGroup} from "mdbreact";
import Banner from "../../components/Banner/Banner";
import Footer from "./../../components/Footer/Footer";


class AddPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      description: 'Pizza',
      price: '0'
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props)
    this.props.handleAddItem(this.state.formData);
    
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };


  render() {
    return (
      <>
      <Banner/>
   
        

        <MDBContainer className='mb-4'>
                      
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
              <MDBRow>
                <MDBCol md='10' lg='6' xl='5' sm='12' className='mt-5 mx-auto'>
                  <MDBCard>
                    <MDBCardBody>
                      <div className='form-header blue-gradient'>
                        <h3>
                          Add Item to Menu:
                        </h3>
                      </div>
                      
                      <MDBInput
                      label='name'
                         className="form-control"
                         name="name"
                         value={this.state.formData.name}
                         onChange={this.handleChange}
                         required
                      />
                      <MDBInput
                      type='textarea'
                      label='description'
                           className="form-control"
                           name="description"
                           // value={this.state.formData.description}
                           onChange={this.handleChange}
                           required
                      />

                        <MDBInputGroup
                        label='price'
                        prepend="$"
                          className="form-control"
                          name="price"
                          // value={this.state.formData.price}
                          onChange={this.handleChange}
                      />
                      <div className='text-center mt-3 black-text'>
                      
                        <hr />
                        
                      </div>
                      <div className='inline-ul text-center d-flex justify-content-center'>
                      <button className="btn blue darken-2 text-white">Add</button>
                      &nbsp;&nbsp;&nbsp;
                      <Link to="/">Cancel</Link>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              </form>
            </MDBContainer>
    




        <Footer/>
      </>
    );
  }
}

export default AddPage;