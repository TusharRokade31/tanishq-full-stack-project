import React, { useEffect, useState } from "react";
import Product from "./Product";
import { IoDiamondOutline, IoLocationOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import OffCanvas from "./design elements/OffCanvas";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getDashProducts } from "../store/product/action";
import { filterProductsByCategory } from "./filterDataLogics";

const currencies = [
  {
    value: "Best Sellers ",
  },
  {
    value: "New Arrivals",
  },
  {
    value: "Popularity",
  },
  {
    value: "Best Matches",
  },
  {
    value: "Price: Low To High",
  },
  {
    value: "Price: High To Low",
  },
];

const AllProducts = () => {
  // const [pageCount, Setpagecount] = useState(1)
  const { category } = useParams();
  const categoryName = category
    .replace(/-/g, " ")
    .split(" ")
    .join(" ");

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts({page: pageCount, size: '', search: '' }));
  // }, [pageCount]);

  const [selectedValue, setSelectedValue] = useState("Best Matches");

  // Function to handle changes in selection
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const data = useSelector((state) => state.productss);
  const products = data.products;

  const filterData = filterProductsByCategory(
    products,
    categoryName,
    selectedValue
  );

  return (
    <>
      <div className="productDetail">
        <div className="container d-flex justify-content-between my-3">
          <div>
            <small>Home | {categoryName}</small>
            <small> {filterData.length}</small>
          </div>
          <div>
            <small>
              <IoDiamondOutline /> Festival Of Diamonds |
            </small>
            <small className="ms-3">
              <IoLocationOutline />
              Pincode
            </small>
          </div>
        </div>
      </div>
      <div className="py-3 container align-items-center d-flex justify-content-between">
        {/* <OffCanvas /> */}
        <div>
          <div className="d-flex">
            <p className="w-50 mt-3 me-2 dark">SORT BY:</p>
            <TextField
              className="w-100"
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="Best Matches"
              value={selectedValue} // Bind state to TextField value
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row row-cols-4">
          {data.isLoading ? (
            <Spinner animation="border" className="spinner" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            filterData.map((product) => {
              return <Product key={product._id} product={product} />;
            })
          )}
        </div>
        {/* {products.length <= 7 ? null : (<div className="d-flex justify-content-center my-5">
        <button className="explore_btn" onClick={()=>Setpagecount(pageCount + 1)}>See more products</button>
        </div>) } */}
      </div>
    </>
  );
};

export default AllProducts;
