import React, {Component} from 'react';
import  {MDBContainer} from "mdbreact";
import {Link} from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";

class EditPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.item
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateItem(this.state.formData);
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
        <h1>Edit Item</h1>
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
            //   value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
            //   value={this.state.formData.price}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE Item
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
        </MDBContainer>
      </>
    );
  }
}

export default EditPage;