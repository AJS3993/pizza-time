import  {Card} from "mdbreact";
import React from "react";

const menu = props => (
  <div>
    {props.menu.map(menu => (
     
     <Card>
       
     
        {menu.name} <br/>
        {menu.description} <br/>
       {menu.price} <br/>
      
      

      </Card>
      
    ))}
  </div>
);
export default menu;