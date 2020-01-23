import React from 'react';



function MenuListItemStuff({menu, handleDeleteItem}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        
      </div>
      <div className='panel-footer PuppyListItem-action-panel'>
        
       
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteItem(menu._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default MenuListItemStuff;