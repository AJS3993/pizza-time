import  {Button, Card}  from 'react-bootstrap';
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";



const NavBar = props => {

  let nav = props.user ? (
    <div>

      <Link to="" className="NavBar-link btn" onClick={props.handlelogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="NavBar-welcome">{props.user.name}</span>

    </div>
    
  ) : (
    <div>
      <Card>
      <Button variant="outline-primary"><Link to="/login" className="NavBar-link">
        LOG IN
      </Link></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outline-primary"><Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link></Button>
      </Card>
    </div>
  )
  
  return <div className="NavBar">{nav}</div>;
};

export default NavBar;