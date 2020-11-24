import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import UserModel from '../models/user';
import '../components/Dashboard/Dashboard.scss'


const Dashboard = (props) => {
  const [name, setName] = useState([])
  const [email, setEmail] = useState('')
  
  useEffect(()=>{
    fetchData()
  })
  
  const fetchData =() => {
    UserModel.show().then(data => {
        setName( data.allUsers )
      })
    }

  return (
    <div>
      { props.name }
    </div>
  )
}

export default Dashboard;