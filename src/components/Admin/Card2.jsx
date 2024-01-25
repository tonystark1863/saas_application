import React from 'react';

const Card2 = ({ data, onClick }) => (
    <div className='user-container' >
        <div style={{marginLeft:'20px' ,marginTop:'5px'}}>
        <h3 style={{ paddingLeft:'20px'}}>{data.plan}</h3>
        <p style={{ color:"gray" ,marginLeft:'20px'}}>{data.Description}</p>
        </div>
        <div style={{ marginTop: '20px', marginRight: '20px' }}>
        <p style={{ color:"green"}}>{data.Price}</p>
        </div>

    </div>
);
  
export default Card2