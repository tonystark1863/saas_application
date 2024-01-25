import React, { useState, useEffect } from 'react';
import Card from './Card';



const FullDetails = ({ data, onClose }) => {

  const [isEditing, setIsEditing] = useState(false);


  function HandleEdit() {
    setIsEditing(true);
  }

  return (
    isEditing ? ( 
      <div>
        {/* <EditUser id={ data.id} /> */}
        Edit
    </div>
    ):
    (<div style={{ display: '-ms-flexbox' }}>
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px',borderRadius:'15px', width:'400px', height:'200px' }}>
    <div style={{ display:"flow", alignItems: 'center', justifyContent:'space-between'}}>
      <p><strong>FirstName : </strong>  {data.FirstName}</p>
      <p><strong>LastName : </strong>  {data.LastName}</p>
      <p><strong>email : </strong>  {data.email}</p>
      <p><strong>password : </strong>  {data.password}</p>
    </div>
    <div>
    <button className='button' onClick={HandleEdit}>Edit</button>
    </div>
    </div>
  </div>)
  );
}

const EditUser = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3003/data')
      .then((response) => response.json())
      .then((data) => setData(data.map(item => ({ ...item, date: new Date(item.date) }))))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(data);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };
  
  return (
    <div>

      {selectedItem ? (
        // Display full details when an item is selected
        <div>
          <button className='button' onClick={handleBackClick}>Back</button>
                  <FullDetails data={selectedItem} onClose={handleBackClick} />
                  
        </div>
      ) : (
          
        // Display cards in a grid format, sorted and grouped by month
          <div>
            <div>Users List</div>
          {data.map((item) => (
            <div key={item.id}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
                  <Card key={item.id} data={item} onClick={handleCardClick} />
              </div>
            </div>
          ))}
        </div>
          )}
          

    </div>
  );
};

export default EditUser;
