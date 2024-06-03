import React from "react";
import { Link } from "react-router-dom";

const NewRelease = ({ data }) => {
  return (
    <div className="new_releases d-flex justify-content-center align-items-center flex-column mx-4">
      <img src={`http://localhost:8001/uploads/${data.image}`} alt="" />
      <Link to={`/shop/${data.name.replace(/\s+/g, "-").toLowerCase()}`}>
        <button className="explore_btn">Explore More</button>
      </Link>
    </div>
  );
};

export default NewRelease;
