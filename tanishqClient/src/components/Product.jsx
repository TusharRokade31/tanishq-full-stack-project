import React from "react";
import { IoMdSearch } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link, useParams } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <div>
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          {/* <Tooltip title="Add to wishlist" className="wishlistBtn">
          <IconButton>
            <FavoriteBorderOutlinedIcon className="icon" />
          </IconButton>
        </Tooltip> */}
          <div className="card m-2 rounded-0" style={{ width: "18rem" }}>
            <div className="p-2">
              <img
                className="card-img-top rounded-0"
                src={`http://localhost:8001/uploads/${product.thumbnail}`}
                alt="Card image cap"
              />
            </div>

            <div className="card-body">
              {/* <div className="btns">
              <button>
                <CiCamera /> Try it on
              </button>
              <button>
                {" "}
                <IoMdSearch /> Similar
              </button>
            </div> */}
              <small className="fw-bold card-title">{product.title}</small>
              <h6 className="card-text">₹ {product.price}</h6>
              <small>check delivery date</small>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
