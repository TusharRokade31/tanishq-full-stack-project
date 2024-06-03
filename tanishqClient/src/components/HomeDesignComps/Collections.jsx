import React from "react";
import { Link } from "react-router-dom";

const Collections = ({ data }) => {
  return (
    <div className="collection mx-2 rounded">
      <img src={`http://localhost:8001/uploads/${data.image}`} alt="" />
      <div className="d-flex justify-content-between align-items-baseline">
        <h5 className="mt-2 ms-2 py-2">{data.name}</h5>
        <Link className="text-dark text-decoration-none" to={`/shop/${data.name.replace(/\s+/g, "-").toLowerCase()}`}><p className="me-3 pb-2">Explore More</p></Link>
      </div>
    </div>
  );
};

export default Collections;
