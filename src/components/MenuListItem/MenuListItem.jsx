import  {Card} from "mdbreact";
import React from "react";
import MenuListItemStuff from './../MenuListItemStuff/MenuListItemStuff'


const menu = props => (
  <div>
    {props.menu.map(menu => (
     
     <Card>
       
     
        {menu.name} <br/>
        {menu.description} <br/>
       {menu.price} <br/>
{/* 
       <MenuListItemStuff
            menu={menu}
            handleDeleteItem={props.handleDeleteItem}
            key={menu._id}/> */}
      </Card>
      
    ))}
  </div>
);
export default menu;