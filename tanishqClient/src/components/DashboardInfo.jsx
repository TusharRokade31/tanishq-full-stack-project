import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getAllProducts } from "../store/product/action";

const DashboardInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const data = useSelector((state) => state.productss.products);



  return (
    <div className="mt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Collection</th>
            <th scope="col">Purity</th>
            <th scope="col">jewellery Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>
                  <img
                    className="dashPimg"
                    src={`http://localhost:8001/uploads/${item.thumbnail}`}
                    alt=""
                  />
                </td>
                <td>{item.title}</td>
                <td>₹{item.price}</td>
                <td>{item.collections}</td>
                <td>{item.purity}</td>
                <td>{item.jewellery_type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>
  );
};

export default DashboardInfo;
