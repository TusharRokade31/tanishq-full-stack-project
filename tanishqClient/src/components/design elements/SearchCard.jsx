import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({item}) => {
  return (
    <Link className="text-decoration-none" to={`/product/${item._id}`}>
    <div className="col">
      <div className="card w-75 p-1">
        <img
          src={`http://localhost:8001/uploads/${item.thumbnail}`}
          className="card-img-top"
          alt="..."
        />
        <div>
          <small className="card-text p-0 fst-italic">{item.title}</small>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SearchCard;
