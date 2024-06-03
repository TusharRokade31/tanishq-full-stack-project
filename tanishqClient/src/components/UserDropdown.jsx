import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const UserDropdown = ({currentUser}) => {
    
    const {logout} = useAuth()
  return (
    <div className="dropdown-login mt-4">
      <h5>Dear {currentUser.name}</h5>
      <p>Your profile is updated</p>
      <Link to={"/"}>
        <button className="explore_btn me-1">Settings</button>
      </Link>
        <button className="explore_btn ms-1" onClick={logout}>Log Out</button>
      
    </div>
  )
}

export default UserDropdown