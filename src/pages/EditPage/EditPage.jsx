import React, {Component} from 'react';
import  {MDBContainer} from "mdbreact";
import {Link} from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";
import {update} from '../../services2/services2'


class EditPage extends Component {
  state = {
    name: '',
    description: '',
    price: ''
  };

  componentDidMount = () => {
    this.setState({
      name: this.props.location.state.name,
      description: this.props.location.state.description,
      price: this.props.location.state.price,
    })
  }

  formRef = React.createRef();

  handleSubmit = async e => {
    e.preventDefault();
    const {name, description, price} = this.state

    // create the item object
    const item = {
      name,
      description,
      price,
      _id: this.props.location.state._id
    }

    // call update on it
    await update(item)
    this.props.history.push('/menu')
  };

  handleChange = (e, name) => {
    const {value} = e.target;
    this.setState({
      [name]: value
    })
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
              value={this.state.name}
              onChange={(e) => this.handleChange(e, 'name')}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleChange(e, 'description')}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
              value={this.state.price}
              onChange={(e) => this.handleChange(e, 'price')}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
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