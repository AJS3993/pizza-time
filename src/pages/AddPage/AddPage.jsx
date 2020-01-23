import  {MDBContainer} from "mdbreact";
import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";


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
      <NavBar/>
        <h1>Add Food</h1>
        <MDBContainer>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
            
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
            
              className="form-control"
              name="description"
              // value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
            
              className="form-control"
              name="price"
              // value={this.state.formData.price}
              onChange={this.handleChange}
            />
          </div>
          <button
          
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD
          </button>
        </form>
        </MDBContainer>
     
      </>
    );
  }
}

export default AddPage;