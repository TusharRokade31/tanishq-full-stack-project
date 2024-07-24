import React, { useEffect, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import searchBanner from "../assets/images/search-banner.jpg";
import SearchCard from "./design elements/SearchCard";
import { getSearchProducts } from "../store/product/action";
const SearchProducts = () => {
  const [search, Setvalue] = useState("");
  const [val, Setval] = useState(false);
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getSearchProducts(search));
  }, [search])

  const SearchData = useSelector((state) => state.productss.Searchproducts);
  const trimData = SearchData


  const handleOnchange = (e) => {
    Setval(true)
    Setvalue(e.target.value);
    
  };
  return (
    <>
      <form className="searchbar d-flex flex-column ms-5" role="search">
        <input
          className="searchInp form-control me-2 py-2"
          type="search"
          onChange={handleOnchange}
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more ..."
          aria-label="Search"
        />
        <div className="searchBg p-2">
          <div className="d-flex flex-column">
            <div>
              <h6>popular Searches</h6>
              <div className="d-flex flex-column">
                <small className="w-75 border rounded-pill px-2 my-1">
                  <FaArrowTrendUp /> Diamond Rings
                </small>
                <small className="w-75 border rounded-pill px-2 my-1">
                  <FaArrowTrendUp /> Pendants
                </small>
                <small className="w-75 border rounded-pill px-2 my-1">
                  <FaArrowTrendUp /> Everday Neckware
                </small>
                <small className="w-75 border rounded-pill px-2 my-1 mb-3">
                  <FaArrowTrendUp /> Mangalsutra
                </small>
              </div>
            </div>
            <div>
              {val ? <div className="row row-cols-4 g-0">
                {trimData.map((item) => {
                  return <SearchCard key={item._id} item={item} />;
                })}
              </div> : <h5>search to get products here....</h5>
              }
            </div>
            <img src={searchBanner} alt="" />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchProducts;
