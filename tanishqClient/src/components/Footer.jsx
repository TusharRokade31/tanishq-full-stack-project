import React from 'react'

const Footer = () => {
  return (
    
  <footer className="py-5 footerchanges">
    <div className="container">
    <div className="row">
      <div className="col-2">
        <h5>Useful Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Delivery Information</li>
          <li className="nav-item mb-2">International Shipping</li>
          <li className="nav-item mb-2">Payment Options</li>
          <li className="nav-item mb-2">Track your Order</li>
          <li className="nav-item mb-2">Returns</li>
          <li className="nav-item mb-2">Find a Store</li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Information</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Careers</li>
          <li className="nav-item mb-2">Blogs</li>
          <li className="nav-item mb-2">Offers & Contest Details</li>
          <li className="nav-item mb-2">Help & FAQs</li>
          <li className="nav-item mb-2">About Tanishq</li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Contact Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Write to Us</li>
          <li className="nav-item mb-2">1800-266-0123</li>
          <li className="nav-item mb-2">Chat with Us</li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>©Titan Company Limited. All Rights Reserved.</p>
      
    </div>
    </div>
  </footer>

  )
}

export default Footer