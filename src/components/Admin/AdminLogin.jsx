import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';



const users = [
    {
        "id": 1,
        "FirstName": "AbhiVardhan",
        "email": "abhi@gmail.com",
        "password": "abhi",
    }
]
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const [data, setData] = useState(null);
    
  const handleNextClick = () => {
    const user = users.find(user => user.email === email);

    if (user) {
      // User found, prompt for password
      setLoginStatus('password');
    } else {
      // User not found
      setLoginStatus('userNotFound');
    }
  };

  const handleLoginClick = () => {
    const user = users.find(user => user.email === email);

    if (user && user.password === password) {
      // Password is correct, simulate logging in for 2 seconds
      setLoginStatus('loggingIn');
      setData(user);
      setTimeout(() => {
        // Redirect to Dashboard component after logging in
        setLoginStatus('success');
      }, 2000);
    } else {
      // Incorrect password
      setLoginStatus('incorrectPassword');
    }
  };
  // Render the Dashboard component if login is successful
  if (loginStatus === 'success') {
    return <AdminDashboard user = {data} />;
  }

  return (

    <div>
      <div className='headingbar'>
      <div className="heading">StripPlan-Hub</div>
      </div>
      <div className="container">
      </div>
      
      <div style={{ marginTop:'150px'}}>
          
          <h3 style={{textAlign:'center'}}>Admin Login</h3>
          <div className="container">
          
    {loginStatus === 'userNotFound' && <p className="error">User not found. Please try again.</p>}
    {loginStatus !== 'userNotFound' && loginStatus !== 'loggingIn' && (
      <>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputField"
        />
                { loginStatus === null && (<div><button onClick={handleNextClick} className="submitButton">
          Next
        </button></div>)}
      </>
    )}

    {loginStatus === 'password' && (
      <>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputField"
        />
        <button onClick={handleLoginClick} className="submitButton">
          Login
        </button>
      </>
    )}

    {loginStatus === 'incorrectPassword' && (
      <p className="error">Incorrect password. Please try again.</p>
    )}
    {loginStatus === 'loggingIn' && <p className="loading">Logging in...</p>}
  </div>
          </div>
        
      </div>

    
  );
};

export default AdminLogin;
