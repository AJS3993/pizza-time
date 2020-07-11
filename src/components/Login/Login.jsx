
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
    <div>

      
      <MDBBtn rounded color="blue darken-4" className='p-3'><strong><Link to="/login" className="Login-link white-text">
        LOG IN
      </Link></strong></MDBBtn>
      &nbsp;&nbsp;
      <MDBBtn rounded color="blue darken-4" className='p-3'><strong><Link to="/signup" className="Login-link white-text">
        SIGN UP
      </Link></strong></MDBBtn>
    

    </div>
  )
  
  return <div className="Login">{nav}</div>;
};

export default Login;