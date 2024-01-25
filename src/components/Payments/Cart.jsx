import React from 'react';
import nodata from '../nodata.jpg'

function Cart({ data }) {
  
    return (
      <div >
        <h3 style={{marginLeft:'100px',marginTop:'100px'}}>My Cart</h3>
        <img src={nodata} alt="no data Found" style={{width:'300px',height:'300px' , marginTop:'10px'}}/>
      </div>

  );
}

export default Cart