import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import MenuPage from "./../MenuPage/MenuPage";
import AboutPage from "./../AboutPage/AboutPage";
import EditPage from './../EditPage/EditPage';
import OrderPage from "./../OrderPage/OrderPage";
import AddPage from './../AddPage/AddPage';
import * as Services from '../../services2/services2';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';



import "./App.css";

class App extends Component {
  state = {
    Items: []
  };

  handleAddItem = async newItemData => {
    const newItem = await Services.create(newItemData);
    this.setState(state => ({
      Items: [...state.Items, newItem]
    }),
    // Using cb to wait for state to update before rerouting
    () => this.props.history.push('/menu'));
  }
  

  handleUpdateItem = async updatedItemData => {
    const updatedItem = await Services.update(updatedItemData);
    const newItemsArray = this.state.Items.map(p => 
      p._id === updatedItem._id ? updatedItem : p
    );
    this.setState(
      {Items: newItemsArray},
      () => this.props.history.push('/')
    );
  }

  // handleDeleteItem= async id => {
  //   await Services.deleteOne(id);
  //   this.setState(state => ({
  //     // Yay, filter returns a NEW array
  //     Items: state.Items.filter(p => p._id !== id)
  //   }), () => this.props.history.push('/'));
  // }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const Items = await Services.getAll();
    this.setState({Items});
  }


  handlelogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignuporLogin = () => {
    this.setState({ user: userService.getUser() });
  };
  render() {
    return (
      
      <div className='app'>

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                user={this.state.user}
                handlelogout={this.handlelogout}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignuporLogin={this.handleSignuporLogin}
              />
            )}
          />

          <Route
            exact
            path="/menu"
            render={({ history }) => (
              <MenuPage
              history={history}
                menu={this.state.menu}
                handleDeleteItem={this.handleDeleteItem}
                />
            )}
          />

          <Route
            exact
            path="/about"
            render={({ history }) => (
              <AboutPage
                
                />
            )}
          />

          <Route
            exact
            path="/order"
            render={({ location }) => (
              <OrderPage
              location={location}
                />
            )}
          />

          <Route
            exact
            path="/add"
            render={() => (
              <AddPage
              handleAddItem={this.handleAddItem}
                />
            )}
          />

            <Route exact path='/edit' render={({location, history}) => 
            <EditPage
              history={history}
              handleUpdatePuppy={this.handleUpdateItem}
              location={location}
            />
          } />

        </Switch>
      </div>
    );
  }
}

export default App;