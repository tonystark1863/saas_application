import React from 'react';

const Card = ({ data }) => {
    const handleClick = () => {
        window.open(data.url, '_blank'); // Opens in a new tab
    }
return (
    <div className='card-home'style={{ width: '200px', height: '200px', border: '1px solid 00416a', margin: '10px' ,textAlign:'center',justifyContent:'center' }}>
    <h2 style={{marginTop:'30px' ,color:"lavender" ,color:'black'}}>{data.plan}</h2>
  <p style={{color:'gray'}}>{data.Description}</p>
      <p style={{
            padding: '10px', margin: '10px', marginTop:'40px' ,backgroundColor: 'blue', borderRadius
              : '15px', color: 'white'
      }} onClick={handleClick}>{data.Price}</p>
  </div>
    )
  }
  
export default Card