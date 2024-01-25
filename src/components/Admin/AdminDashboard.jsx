import React, { useState } from 'react'
import SideBar from '../Header/SideBar'
import Register from './Register'
import EditUsers from './EditUsers'
import EditPlans from './EditPlans'
import AdminHome from './AdminHome'

const AdminDashboard = ({ data }) => {

  const options = ['Register','EditUsers','EditPlans'];
    
  const [selectedOption, setSelectedOption] = useState('Main');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case 'Register':
        return <Register/>;
      case 'EditUsers':
        return <EditUsers/>;
      case 'EditPlans':
        return <EditPlans/>;
      default:
        return <AdminHome/>;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <SideBar onOptionChange={handleOptionChange} selectedOption={selectedOption} options={options}/>
        <div style={{ marginLeft: '200px',marginTop:'100px', padding: '20px', flexGrow: 1 }}>
          {renderSelectedComponent()}
        </div>
      </div>
    </div>
  );
}; 

export default AdminDashboard