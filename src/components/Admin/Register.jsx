import Axios  from 'axios';
import React, { useState } from 'react'

const Register = () => {

    const url = "http://localhost:3003/data"
  const obj = {
    "FirstName": "",
    "LastName": "",
    "email": "",
    "password": "",
    "cart" : "",
    "selectedPlan": "",
    "dateOfPurchase": "",
    "status":"inactive",
        "Transactions": []
      }
  const [data, setData] = useState(obj);


    function submit(e) {
      e.preventDefault();
      Axios.post(url, {
        "FirstName": data.FirstName,
        "LastName": data.LastName,
        "email": data.email,
        "password": data.password,
        "cart" : 1, 
        "selectedPlan": "",
        "dateOfPurchase": "",
        "status":"inactive",
            "Transactions": []
        })
            .then(res => {
                console.log(res.data)
            }).catch(error => {
                console.log(error);
            })
        alert("data saved");
        setData(obj);

    }

    function handleInputChange(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata)
      console.log(newdata);
  }

  return (
    <div>
      <div style={{ fontSize:'20px',textAlign: 'center', marginBottom:'20px' ,fontWeight:'bold',marginTop:'20px'}}>Enter the Details</div>
      <form onSubmit={submit} className='form-container'>
              <label className='form-label'>First Name :<input className='form-input' type="text" id="FirstName" value={data.FirstName} onChange={handleInputChange} /></label><br />
              <label className='form-label'>Last Name<input className='form-input' type="text" id="LastName" value={data.LastName} onChange={handleInputChange} /></label><br />
              <label className='form-label'>Email<input className='form-input' type="email" id="email" value={data.email} onChange={handleInputChange} required /></label><br />
        <label className='form-label'>Password<input className='form-input' type="text" id="password" value={data.password} onChange={handleInputChange} required /></label><br />

              <button style={{height:'40px' ,marginTop:'5px'}}  id='formButton' type="submit">Submit</button>
    </form>
          
    </div>
  )
}

export default Register