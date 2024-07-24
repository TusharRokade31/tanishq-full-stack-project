import React, { useState } from "react";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteItems, getItems, updateQuantity } from "../store/cart/action";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";


import Toast from "react-bootstrap/Toast";

const CartItem = ({ item, cartmessage }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  function deleteitem() {
    dispatch(deleteItems(item._id));
  }

  function inc() {
    dispatch(updateQuantity({ cartId: item._id, type: "inc" }));
    if (item.quantity == 10) {
      setShow(true);
    }
  }
  function dec() {
    dispatch(updateQuantity({ cartId: item._id, type: "dec" }));
  }

  return (
    <>
      <hr />
      <div className="d-flex mt-3">
        <Link to={`/product/${item.productID?._id}`}>
          {" "}
          <img
            src={`http://localhost:8001/uploads/${item.image}`}
            className="me-5"
            style={{ width: "190px" }}
            alt=""
          />
        </Link>
        <div>
          <h5>{item.title}</h5>
          <p>Weight :{item.productID?.gross_weight}g</p>
          <div className="d-flex align-items-center flex-row mb-2">
            <div>
              <button
                onClick={item.quantity == 1 ? deleteitem : dec}
                type="button"
                class=" btn btn-outline-primary"
              >
                <FiMinus />
              </button>
              <span className=" fw-bold px-2">{item?.quantity}</span>
              <button
                onClick={inc}
                type="button"
                class="me-5 btn btn-outline-primary"
              >
                <FiPlus />
              </button>
            </div>
            <button className="deleteBtn btn btn-outline-danger " onClick={deleteitem}>
            <AiOutlineDelete/>
          </button>
          </div>

          {cartmessage == "empty" ? (
            ""
          ) : (
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={1000}
              autohide
            >
              <Toast.Body>{cartmessage}</Toast.Body>
            </Toast>
          )}
          <h5>₹ {item.price * item.quantity}</h5>
          
        </div>
      </div>
    </>
  );
};

export default CartItem;
