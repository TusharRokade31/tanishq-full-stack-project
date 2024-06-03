import {
  Breadcrumbs,
  Button,
  MenuItem,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useParams ,useNavigate } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgArrowsExchange } from "react-icons/cg";
import { IoDiamondOutline } from "react-icons/io5";
import Carousel from "react-bootstrap/Carousel";
import promiseBanner from "../../assets/images/Promises_Banner_DesktopU.webp";
import React, { useEffect, useState } from "react";
import PriceChart from "../PriceChart";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/product/action";
import { addToCart } from "../../store/cart/action";
import Toast from "react-bootstrap/Toast";
import { useAuth } from "../../context/AuthContext";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
;

  const {currentUser } = useAuth()

  const [show, setShow] = useState(false);

  const { product_id } = useParams();
  useEffect(() => {
    dispatch(getProduct(product_id));
  }, [product_id]);

  const handleClick = (event) => {

    if(currentUser == null){
      navigate("/login")
    } else{
      dispatch(
            addToCart({
              userID: currentUser._id,
              productID: product_id,
            })
          );
    }
   
    
    setShow(true);
   }



  const data = useSelector((state) => state.productss);
  
  const cartdata = useSelector((state) => state.cartss);

  const currencies = [
    {
      value: "India",
    },
    {
      value: "UAE",
    },
    {
      value: "Germany",
    },
    {
      value: "Saudi Arbia",
    },
    {
      value: "Netherlands",
    },
    {
      value: "Malaysia",
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="product mb-5">
              <Breadcrumbs aria-label="breadcrumb">
                <Link className="text-decoration-none link-dark" to="/">
                  Home
                </Link>
                <Link className="text-decoration-none link-dark">Product</Link>
                <Typography color="text.primary">
                  {data.product.title}
                </Typography>
              </Breadcrumbs>
              <Carousel className="ms-5 w-75">
                {data.product.images?.map((imgs) => {
                  return (
                    <Carousel.Item key={imgs}>
                      <img
                        className="fluid w-100"
                        src={`${data.filepath}${imgs}`}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-info">
              <h2 className="fs-3 fw-bold">{data.product.title}</h2>
              <hr />
              <p>{data.product.description}</p>
              <span>Price</span>
              <span className="ms-2 fw-bold fs-4">₹{data.product.price}</span>
              <p>Price Inclusive of all taxes. See full Price Breakup</p>

              <span className="fw-bold">
                Gold Purity: {data.product.purity}
              </span>
              <span className="fw-bold ms-3">Diamond weight: 0.235 c</span>
              <p>Not sure what to buy? Check out our Buying Guides</p>

              <button
                className="add-cart-btn"
                variant="contained"
                onClick={handleClick}
              >
                Add to Cart
              </button>

              <button className="buy-now-btn ms-2">Buy Now</button>
              <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Body>{data.product.category?.name} has been added to your cart <IoIosCheckmarkCircle/></Toast.Body>
        </Toast>
              <hr />
              <TextField
                id="outlined-select-currency"
                select
                label="Country"
                defaultValue="India"
                className="countryinp"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                className="pincodeinp"
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
              />
              <hr />
              <div className="lh-1">
                <p>
                  <IoDiamondOutline /> Purity Guaranteed.
                </p>
                <p>
                  <CgArrowsExchange /> Exchange across all stores.
                </p>
                <p>
                  <MdOutlineLocalShipping /> Free Shipping all across India
                </p>
              </div>
              <hr />
              <h5 className="fw-bold">Still Confused What to Buy?</h5>
              <p>
                Get on live video call with our design experts, or visit your
                nearest Tanishq store to get an closer look and know more about
                the product.
              </p>
              <button className="talk-expert-btn">Talk to an Expert</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-bold">Product Details</h5>
            <hr />
            <p>{data.product.product_details}</p>
            <h5 className="mb-3">
              <b>Specifications</b>
            </h5>
            <div className="lh-1">
              <p>
                <b>Earring Height:</b>{" "}
                {data.product.height !== null ? data.product.height : "1Cm"}
              </p>
              <p>
                <b>Earring width:</b>
                {data.product.width !== null ? data.product.width : "2Cm"}
              </p>
              <p>
                <b>Brand:</b> Tanishq
              </p>
              <p>
                <b>Style Type: </b>
                {data.product.style_type}
              </p>
              <p>
                <b>Metal: </b>
                {data.product.metal?.name}
              </p>
              <p>
                <b>Collection: </b> {data.product.collections}
              </p>
              <p>
                <b>Gender:</b> {data.product.gender?.name}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="productDetail_img"
              src={`${data.filepath}${
                data.product.images?.[data.product.images?.length - 1]
              }`}
              alt=""
            />
          </div>
        </div>
        <h5 className="mt-5">Price Breakup</h5>
      </div>

      <PriceChart data={data} />

      <img src={promiseBanner} className="w-100 fluid" alt="" />
    </>
  );
};

export default DetailProduct;
