import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AppBar } from "@mui/material";
import Cart from "./Cart";
import { useAuth } from "../context/AuthContext";

const ProtectedLayout = () => {
  // const logindata = localStorage.getItem("logindata");
  const { currentUser } = useAuth();
  // console.log(currentUser)
  return (
    <>
      {currentUser ? (
        <Outlet></Outlet>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectedLayout;
