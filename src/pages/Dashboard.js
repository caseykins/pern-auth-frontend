import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import UserModel from '../models/user';
import '../components/Dashboard/Dashboard.scss'


const Dashboard = (props) => {
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  
  useEffect(()=>{
    fetchData()
  })
  
  const fetchData =() => {
    UserModel.show().then(data => {
        setUsers( data.allUsers )
      })
    }

  return (
    <div>
      { users.map }
    </div>
  )
}

export default Dashboard;