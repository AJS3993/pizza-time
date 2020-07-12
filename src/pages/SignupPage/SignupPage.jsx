import React, { Component } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import "./SignupPage.css";
import Banner from "../../components/Banner/Banner";
import Footer from "./../../components/Footer/Footer";


class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = msg => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className="SignupPage">
        <Banner />
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>

        <Footer/>
      </div>
    );
  }
}

export default SignupPage;