import axios from 'axios'
import React, { useEffect, useState } from 'react'

const JsonSever = () => {
  const [data,setData] = useState([])
  useEffect(() => {
        axios.get('http://localhost:3003/data')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
  }, [])
  console.log(data);
  return (
    <div>
      {
        data.map((d,i) => {
          return (
            <div id={i}>{d.Billno}</div>
          )
        })
      }
    </div>
  )
}

export default JsonSever