import { useState ,useEffect } from 'react';
import './App.css';
import  Login from './components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/Admin/AdminLogin';
import MainPage from './components/MainPage';


function App() {


  const [data, setData] = useState([]);
  useEffect(() => {
      // Fetch data from the API
      fetch('http://localhost:3003/data')
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.error('Error fetching data:', error));
  },[]);


  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login users={data} />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path='/' element={<MainPage/>}/>
        
      </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
