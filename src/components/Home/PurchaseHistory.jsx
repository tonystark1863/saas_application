import React from 'react'
import nodata from '../nodata.jpg'

const PurchaseHistory = () => {
  return (
    <div>
              <h3 style={{marginLeft:'60px',marginTop:'100px'}}>PurchaseHistory</h3>
        <img src={nodata} alt="no data Found" style={{width:'300px',height:'300px' , marginTop:'10px'}}/>
    </div>
  )
}

export default PurchaseHistory