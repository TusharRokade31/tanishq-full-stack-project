import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthRoute = () => {
  // const logindata = localStorage.getItem("logindata");
  const { currentUser } = useAuth();

  return <div>{!currentUser ? (<Outlet />
) : <Navigate to="/" />}</div>;
};

export default AuthRoute;