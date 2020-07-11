
import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import "./Login.css";



const Login = props => {

  let nav = props.user ? (
    <div>

      <Link to="" className="Login-link btn" onClick={props.handlelogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="Login-welcome">{props.user.name}</span>

    </div>
    
  ) : (
    <div className='d-flex justify-content-center'>

      
      <MDBBtn rounded color="blue darken-4" className='h-100 border border-white'><strong><Link to="/login" className="Login-link white-text">
        LOG IN
      </Link></strong></MDBBtn>
      &nbsp;&nbsp;
      <MDBBtn rounded color="blue darken-4" className='h-100 border border-white'><strong><Link to="/signup" className="Login-link white-text">
        SIGN UP
      </Link></strong></MDBBtn>
    

    </div>
  )
  
  return <div className="Login">{nav}</div>;
};

export default Login;