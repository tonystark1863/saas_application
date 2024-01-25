// Sidebar.js
import React from 'react';
import Header from './Header';

const SideBar = ({ onOptionChange, selectedOption ,options}) => {

  return (
    <div style={{ display: 'flex' }}>
      <Header/>

    <div  style={{ position:'fixed',left:'0',top:'0',width: '150px', backgroundColor: 'black', padding: '20px', height: '100vh', transition: 'margin-left 0.3s ease'}}>
        <ul style={{ marginTop:'100px', listStyle: 'none', padding: 0}}>
        {options.map((option) => (
          <li key={option}>
            <button
              onClick={() => onOptionChange(option)}
              style={{
                width: '100%',
                padding: '20px',
                  margin: '5px 0',
                backgroundColor: selectedOption === option ? '' : 'inherit',
                border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                borderRadius: '8px',
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      </div>
      </div>
  );
};

export default SideBar;
