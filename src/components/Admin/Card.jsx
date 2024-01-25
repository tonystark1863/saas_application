import React from 'react';

const Card = ({ data, onClick }) => (
    <div className='user-container' onClick={() => onClick(data)}>
        <div style={{marginLeft:'20px'}}>
        <h3 style={{ paddingLeft:'20px'}}>{data.FirstName} { data.LastName}</h3>
            <p style={{ color:"gray"}}>{data.email}</p>
        </div>
        <div style={{marginTop:'10px' ,marginRight:'20px'}}>
        <p style={{
            padding: '10px' ,backgroundColor: 'purple', borderRadius: '15px', color: 'white' ,height:'20px'
        }}>View</p>
        </div>

    </div>
);
  
export default Card