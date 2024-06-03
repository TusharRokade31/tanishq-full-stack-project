import React from 'react'
import img404 from "../assets/images/404-Desktop.webp"
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    
        <div className='d-flex flex-column justify-content-center align-items-center p-5'>
        <img src={img404} alt="" />
        <Link to="/">
            <button className='explore_btn mt-5 ms-3 mb-5'>Back to Home</button>
        </Link>
        </div>
  )
}

export default NotFound