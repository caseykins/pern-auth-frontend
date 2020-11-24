import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import UserModel from '../models/user';
// import '../components/Dashboard/Dashboard.scss'
import SideBar from '../components/Dashboard/SideBar'
import ProfileCard from '../components/Dashboard/ProfileCard'


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
      <SideBar />
      { users.map }
      <ProfileCard />
    </div>
  )
}

export default Dashboard;