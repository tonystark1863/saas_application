import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function CenteredTitleWithScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const titleRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled && titleRef.current) {
      titleRef.current.style.transition = 'top 0.3s ease-in-out'; // Add animation
      titleRef.current.style.top = '0'; // Set fixed position
    }
  }, [isScrolled]);


  const basic = {
    "title": "Basic",
    "description": "One Year Per User",
    "price" : "INR 1999",
  }
  const standard = {
    "title": "Standard",
    "description": "One Year, 5 User",
    "price" : "INR 3999",
  }
  const plus = {
    "title": "Plan",
    "description": "One Year ,10 User",
    "price" : "INR 4999",
  }

    return (
        <div className='page' >
        <div className="container-main">
          <div style={{marginTop:'250px'}}>
            <h1 ref={titleRef} className={`title ${isScrolled ? 'fixed' : ''}`}>
                    StripPlan HUB
          </h1></div>
          <p className='line'>------------------------------------------------------------------------------------------------</p>
      <p style={{color:'gray'}}>A Brand new Saas Application</p>
          <p style={{ color: 'gray' }}>That serves all your needs with a wide range of facilities and services.</p>
          
                <div className='Cards' style={{ display:'flex', marginTop:'100px'}}>
                    
                    <Card data={basic}/>
                    <Card data={standard}/>
                    <Card data={plus}/>
            
          </div>
          <div>
            <button style={{padding:'15px', backgroundColor:'blue',marginTop:'100px' ,borderRadius:'5px' }} onClick={()=>{ navigate('/login')}}>Join & Explore</button>
          </div>
          <footer>
            <div style={{ marginLeft:'20px' ,color:'rgba(255, 255, 255, 0.5)'}}>
            <p>All rights reserves @Varshini Goli</p>
            <p>Email us on golivarshini2002@gmail.com</p>
            <p>contact : +91 9550385113</p>
            </div>
          </footer>
    </div>
      </div>
  );
}

const Card = ({ data }) => (
    <div className='card 'style={{ width: '200px', height: '200px', border: '1px solid 00416a', margin: '10px' ,textAlign:'center',justifyContent:'center' }}>
      <h2 style={{marginTop:'30px' ,color:"lavender"}}>{data.title}</h2>
    <p>{data.description}</p>
    <h2 style={{color:"ghostwhite"}}>{data.price}</h2>
    </div>
  );

export default CenteredTitleWithScroll;
