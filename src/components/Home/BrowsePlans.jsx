import React from 'react'
import Card from './Card';
import { plans } from './plans'

const BrowsePlans = ({ data }) => {

    
  return (
      <div  style={{marginTop:'150px'}}>
          <div>Our offered Plans</div>
          <div style={{display:'flex',gap:'25px'}}>
              {
                  plans.map((item) => {
                
                      return (<Card key={item.id} data={item}/>)
                      
                  })
              }
          </div>
    </div>
  )
}

export default BrowsePlans