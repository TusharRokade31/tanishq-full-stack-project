import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../store/cart/action";
import { GrLocation } from "react-icons/gr";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  const getuseID = JSON.parse(localStorage.getItem("user"));
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

  const style = { color: "#832729", fontSize: "1.5em" }
  let totalPrice = data?.cartItems?.reduce(
    (total, item) => total + item.price,
    0
  );
  return (
    <>
    <div className="container">
      <div className="row row-cols-2">
        <div className="cols">
            <div>
                <div className="d-flex">
                <GrLocation style={style}/>
                <h5 className="fw-bold ms-2"> DELIVER TO</h5>
                </div>
                <div className="border p-3">
                
                    <div className="d-flex justify-content-between">
                        <h6  className="fw-bold">Saved Address</h6>
                    <small><CiCirclePlus /> New Address</small>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div>
                        <small className="fw-bold">Name</small>
                    <br />
                    <small>address</small>
                        </div>
                        <div className="d-flex flex-column">
                            <button>Edit address</button>
                            <button>use this address</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="cols">
          <div className="container order-summary  py-4 rounded">
            <h5>ORDER SUMMARY</h5>
            <hr />

            <div className="d-flex">
              <div>
                <p>Sub Total</p>
                <p>Delivery Charge</p>
                <h6 className="fw-bold">TOTAL (Incl of all Taxes.)</h6>
                <h6 className="fw-bold">AMOUNT PAYABLE (Incl of all Taxes.)</h6>
              </div>
              <div className="ps-5 ms-5">
                <p>₹ {totalPrice}</p>
                <p>FREE</p>
                <h6 className="success fw-bold">₹ {totalPrice}</h6>
                <h6 className="success fw-bold">₹ {totalPrice}</h6>
              </div>
            </div>
          </div>
          {data.cartItems.map((item)=>{
            return (<div key={item.title} className="d-flex border rounded my-2 p-2">
            <img src={`${data.filepath}${item.image}`} className="checkoutImg" alt="" />
            <div>
              <h5>{item.title}</h5>
              <small>{item._id}</small>
              <br />
              <small className="fw-bold">Qty:1</small >
            </div>
          </div>)
          })}
        </div>
      </div>
    </div>
    <div className="checkout ">
    <div className="container">
      <p>
        Total:({data?.cartItems?.length}) item:
        <strong>₹ {totalPrice} </strong>
      </p>
      <Link to={"/cart-checkout"}>
        <button className="explore_btn">Proceed to Checkout</button>
      </Link>
    </div>
  </div>
  </>
  );
};

export default CartCheckout;
