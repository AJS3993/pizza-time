import  {MDBContainer, MDBRow, MDBCol, Card} from "mdbreact";
import React from "react";
// import Login from "../../components/Login/Login";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";

const HomePage = props => {
  return (
    <div className="HomePage">

<NavBar />


  <MDBRow>
  <MDBCol className= "col top" size="12"><Card><img alt='pizza' src='https://mobile-cuisine.com/wp-content/uploads/2012/11/pizza-fun-facts.jpg'/></Card></MDBCol>
  </MDBRow>

 <MDBContainer>
  <MDBRow>
    <MDBCol className= "col bot" sm="4"><Card><img className= "pic" alt='pizza' src='https://cdn.popmenu.com/image/upload/c_limit,f_auto,h_1440,q_auto,w_1440/v8k9fthvp3yxyhn4urvo.jpg'/></Card></MDBCol>
    <MDBCol className= "col bot" sm="4"><Card><img className= "pic" alt='pizza' src='https://img.buzzfeed.com/video-api-prod/assets/ca9b0198e2024661ade65f8933240c32/BFV11486_3IngredientAppetizers-ThumbTextless1080.jpg'/></Card></MDBCol>
    <MDBCol className= "col bot" sm="4"><Card><img className= "pic" alt='pizza' src='https://www.pamperedchef.com/iceberg/com/recipe/9660-lg.jpg'/></Card></MDBCol>
  </MDBRow>
</MDBContainer>

    </div>
  );
};

export default HomePage;