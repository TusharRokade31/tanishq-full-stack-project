import React from 'react'
import emptyBag from "../assets/images/empty.svg"
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column my-5 py-5'>
        <img src={emptyBag} alt="" />
        <h3 className='empty-cart-text my-4'>YOUR CART IS EMPTY</h3>
        <Link to={"/shop/jewellery"}><button className='explore_btn mb-5 mt-4'>Continue Shopping</button></Link>
    </div>
  )
}

export default EmptyCart