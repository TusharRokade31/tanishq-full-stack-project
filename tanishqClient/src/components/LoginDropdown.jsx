import React from "react";
import { Link } from "react-router-dom";

const LoginDropdown = () => {
  return (
    <div className="dropdown-login mt-4">
      <h5>MY ACCOUNT</h5>
      <p>Login to access your account</p>
      <Link to={"/login"}>
        <button className="explore_btn me-2">Login</button>
      </Link>
      <Link to={"/sign-up"}>
        <button className="explore_btn ">Sign Up</button>
      </Link>
    </div>
  );
};

export default LoginDropdown;
