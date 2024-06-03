import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from "react-router-dom";


const AdminLayout = () => {
    const { currentUser } = useAuth();
  return (
    <>
      {currentUser.name == "Super Admin" ? (
        <Outlet></Outlet>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  )
}

export default AdminLayout