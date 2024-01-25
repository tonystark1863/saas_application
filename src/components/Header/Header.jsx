// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ user }) => {
  
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/');
  }

  return (
    <div style={{ position: 'fixed', display:'flex', top: 0, left: 0, width: '100%', backgroundColor: 'black', color: 'white', textAlign: 'center',justifyContent:'space-between' , padding: '10px', zIndex: 100, height:'90px'}}>
      <h1 style={{ textAlign: 'left', paddingLeft: '40px' }}>StripePlan-Hub</h1>
      <button style={{ marginRight: '50px' ,height:'50px' ,marginTop:'15px'}} onClick={handleLogout}> Logout </button>
    </div>
  );
};



export default Header;
