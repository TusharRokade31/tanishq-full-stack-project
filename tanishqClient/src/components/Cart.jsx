import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import cartBanner from "../assets/images/cart-secure-delivery-new.webp";
import { getItems } from "../store/cart/action";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Cart = () => {
  const { currentUser } = useAuth();
  const userIDobj = {
    userID: currentUser._id,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems(userIDobj));
  }, []);

  const data = useSelector((state) => state.cartss);

  const totalPrice = data?.cartItems?.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);


  return (
    <>
      {data.cartItems.length !== 0 ? (
        <div className="container mb-5 fluid">
          <div className="row">
            <div className="col col-8">
              {data.cartItems?.map((item) => {
                return <CartItem key={item._id} item={item} cartmessage={data.cartmessage} />;
              })}

              <hr />
              <img src={cartBanner} style={{ width: "776px" }} alt="" />
            </div>
            <div className="col col-4 ">
              <div className="container order-summary  py-4 rounded">
                <h5>ORDER SUMMARY</h5>
                <hr />
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Enter Coupon Code"
                    aria-label="Enter Coupon Code"
                    aria-describedby="basic-addon2"
                  />
                  <button className="ms-0 explore_btn">Apply</button>
                </InputGroup>

                <div className="d-flex">
                  <div>
                    <p>Sub Total</p>
                    <p>Discount</p>
                    <p>Delivery Charge</p>
                    <h6 className="fw-bold">TOTAL (Incl of all Taxes.)</h6>
                  </div>
                  <div className="ps-5 ms-5">
                    <p>₹ {totalPrice}</p>
                    <p>- ₹ 0</p>
                    <p>FREE</p>
                    <h6 className="success fw-bold">₹ {totalPrice}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}

      {data.cartItems.length !== 0 ? (
        <div className="checkout ">
          <div className="container">
            <p>
              Total:({data.cartItems.length}) item:{" "}
              <strong>₹ {totalPrice} </strong>{" "}
            </p>
            <Link to={"/cart-checkout"}>
              <button className="explore_btn">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
