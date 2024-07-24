import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getItems } from '../store/cart/action';

const FormComponent = () => {
  const Navigate = useNavigate()
  const getuseID = JSON.parse(localStorage.getItem("user"));
  const Address = JSON.parse(localStorage.getItem("address"));
  console.log(Address)
  const userIDobj = {
    userID: getuseID._id,
  };
  const dispatch = useDispatch();

  if (getuseID) {
    useEffect(() => {
      dispatch(getItems(userIDobj));
    }, []);
  }

  const data = useSelector((state) => state.cartss);

  const style = { color: "#832729", fontSize: "1.5em" };
  let totalPrice = data?.cartItems?.reduce(
    (total, item) => total + item.price,
    0
  );
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const addressRef = useRef();
  const countryRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      contact: contactRef.current.value,
      address: addressRef.current.value,
      country: countryRef.current.value,
      state: stateRef.current.value,
      zip: zipRef.current.value,
    };
    if(formData){
      localStorage.setItem('address', JSON.stringify(formData))
      Navigate('/payment')
    }
  };

  return (

    <div className="container">
    <div className="row row-cols-2 my-2">
      <div className="cols">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation mb-5" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input type="text" className="form-control" id="firstName" placeholder="first name" ref={firstNameRef} required />
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>

        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">Last name</label>
          <input type="text" className="form-control" id="lastName" placeholder="last name" ref={lastNameRef} required />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com" ref={emailRef} required />
          <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
        </div>
        <div className="col-12">
          <label htmlFor="contact" className="form-label">Contact </label>
          <input type="number" className="form-control" id="contact" placeholder="phone No " ref={contactRef} required/>
          <div className="invalid-feedback">Please enter a valid contact number for shipping updates.</div>
        </div>

        <div className="col-12">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" placeholder="detail address" ref={addressRef} required />
          <div className="invalid-feedback">Please enter your shipping address.</div>
        </div>

        <div className="col-md-5">
          <label htmlFor="country" className="form-label">Country</label>
          <select className="form-select" id="country" ref={countryRef} required>
            <option defaultValue="India">India</option>
          </select>
          <div className="invalid-feedback">Please select a valid country.</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="state" className="form-label">State</label>
          <select className="form-select" id="state" ref={stateRef} required>
            <option value="Maharashtra">Maharashtra</option>
            <option value="California">California</option>
          </select>
          <div className="invalid-feedback">Please provide a valid state.</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="zip" placeholder="pincode" ref={zipRef} required />
          <div className="invalid-feedback">Zip code required.</div>
        </div>
      </div>

      <hr className="my-4" />
      
      <button className="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
    </form>
      </div>
      <div className="cols">
        <div className="chekoutBill">
          {/* {data.cartItems.map((item) => {
            return (
              <div
                key={item.title}
                className="d-flex border rounded my-2 p-2"
              >
                <img
                  src={`${data.filepath}${item.image}`}
                  className="checkoutImg"
                  alt=""
                />
                <div>
                  <h5>{item.title}</h5>
                  <small>{item._id}</small>
                  <br />
                  <small className="fw-bold">Qty:1</small>
                </div>
              </div>
            );
          })} */}
          <div className="container order-summary  py-4 rounded">
            <h5>ORDER SUMMARY</h5>
            <hr />

            <div className="d-flex">
              <div>
                <p>Sub Total</p>
                <p>Delivery Charge</p>
                <h6 className="fw-bold">TOTAL (Incl of all Taxes.)</h6>
                <h6 className="fw-bold">
                  AMOUNT PAYABLE (Incl of all Taxes.)
                </h6>
              </div>
              <div className="ps-5 ms-5">
                <p>₹ {totalPrice}</p>
                <p>FREE</p>
                <h6 className="success fw-bold">₹ {totalPrice}</h6>
                <h6 className="success fw-bold">₹ {totalPrice}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default FormComponent;
