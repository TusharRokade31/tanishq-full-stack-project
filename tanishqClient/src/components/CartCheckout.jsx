import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getItems } from "../store/cart/action";
import FormComponent from "./FormComponent";
import { useNavigate } from "react-router-dom";

const CartCheckout = () => {
  const getuseID = JSON.parse(localStorage.getItem("user"));
  const Address = JSON.parse(localStorage.getItem("address"));
  console.log(Address)
  const Navigate = useNavigate('/paymentdone')
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

  const handlePayment = async (e) => {
    try {
        const res = await fetch(`http://localhost:8001/payment/order`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
              amount:totalPrice
            })
        });

        const data = await res.json();
        console.log(data);
        handlePaymentVerify(data.data)
    } catch (error) {
        console.log(error);
    }
}


console.log("loop")

const handlePaymentVerify = async (data) => {
    const options = {
        key: import.meta.env.RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "Tanishq Jewellery",
        description: "Test Mode",
        order_id: data.id,
        handler: async (response) => {
            console.log("response", response)
            try {
                const res = await fetch(`http://localhost:8001/payment/verify`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    })
                })

                const verifyData = await res.json();

                if (verifyData.message) {
                  dispatch(clearItem(userIDobj))
                  Navigate("/")
                }
            } catch (error) {
                console.log(error);
            }
        },
        theme: {
            color: "#5f63b8"
        }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open()
}


  return (
    <>
      <div className="container">
        <div className="row my-2">
          <div class="col-7">
                <h4>Billing & Delivery Address</h4>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">{Address.firstName} {Address.lastName}<span class="badge badge-success">HOME</span></h5>
                        <p class="card-text">{Address.address}, Mumbai<br/>{Address.country},{Address.state} - {Address.zip}<br/>Mobile: <strong>{Address.contact}</strong><br/>• Pay on Delivery not available</p>
                        <button class="btn btn-danger btn-block" onClick={handlePayment}>CONTINUE TO PAYMENT</button>
                    </div>
                </div>
            </div>
          <div className="col-5">
            <div className="chekoutBill">
              {data.cartItems.map((item) => {
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
                      <small>{item.title}</small>
                      <br />
                      <small>ORDER ID - #{item._id}</small>
                      <br />
                      <small className="fw-bold">Qty:{item.quantity}</small>
                    </div>
                  </div>
                );
              })}
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

      {/* <div class="container mt-5">
        <div class="row">
            <div class="col-md-8">
                <h4>Billing & Delivery Address</h4>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">{Address.firstName} {Address.lastName}<span class="badge badge-success">HOME</span></h5>
                        <p class="card-text">{Address.address}, Mumbai<br/>{Address.country},{Address.state} - {Address.zip}<br/>Mobile: <strong>{Address.contact}</strong><br/>• Pay on Delivery not available</p>
                        <button class="btn btn-danger btn-block" onClick={handlePayment}>CONTINUE TO PAYMENT</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <h5>Delivery Estimates</h5>
                <p>Estimated delivery by <strong>today</strong></p>
                <h5>Price Details (1 Item)</h5>
                <p>Total MRP: ₹1,999</p>
                <h4>Total Amount: ₹1,199</h4>
            </div>
        </div>
    </div> */}
      
      {/* <div className="checkout ">
        <div className="container">
          <p>
            Total:({data?.cartItems?.length}) item:
            <strong>₹ {totalPrice} </strong>
          </p>
          <Link to={"/cart-checkout"}>
            <button className="explore_btn">Proceed to Checkout</button>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default CartCheckout;
