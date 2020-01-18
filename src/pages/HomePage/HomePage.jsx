import React from "react";
import Login from "../../components/Login/Login";
import NavBar from "../../components/NavBar/NavBar";

// import "./HomePage.css";

const HomePage = props => {
  return (
    <div className="HomePage">
      <NavBar />
      <Login user={props.user} handlelogout={props.handlelogout} />
      
    </div>
  );
};

export default HomePage;