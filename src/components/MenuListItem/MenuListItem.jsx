import  {Card} from "mdbreact";
import React from "react";

const menu = props => (
  <div>
    {props.menu.map(menu => (
     <Card>
     <p>
        {menu.name} <br/>
        {menu.description} <br/>
       {menu.price} <br/>
      </p>
      </Card>
    ))}
  </div>
);
export default menu;