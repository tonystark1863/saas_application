// App.js
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header'
import SideBar from '../Header/SideBar';
import Cart from '../Payments/Cart';
import PurchaseHistory from './PurchaseHistory'
import BrowsePlans from './BrowsePlans'



const Home = ({user}) => {

  const [data, setData] = useState([]);
  useEffect(() => {
      // Fetch data from the API
      fetch('http://localhost:3003/data')
      .then((response) => response.json())
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  });
  

  const options = ['BrowsePlans','Cart','PurchaseHistory'];

    const [selectedOption, setSelectedOption] = useState('Main');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case 'Cart':
        return <Cart data={data}  />;
      case 'PurchaseHistory':
        return <PurchaseHistory />;
      case 'BrowsePlans':
        return <BrowsePlans data={data} />;
      default:
        return <BrowsePlans/>;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Header user={user}/>
        <SideBar onOptionChange={handleOptionChange} selectedOption={selectedOption} options={options} />
        <div style={{ marginLeft: '200px', marginTop: '100px', padding: '20px', flexGrow: 1, overflow:'auto' } }>
          {renderSelectedComponent()}
        </div>
      </div>
    </div>
  );
}; 

export default Home;
