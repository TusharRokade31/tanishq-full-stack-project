import React, { useEffect, useState } from "react";
import { IoDiamondOutline, IoCartOutline } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { LiaStoreAltSolid } from "react-icons/lia";
import logo from "../assets/images/logo.svg";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { navArry } from "./navLinkArry.jsx";
import { Badge } from "@mui/material";
import LoginDropdown from "./LoginDropdown.jsx";
import UserDropdown from "./UserDropdown.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext.jsx";
import { getItems } from "../store/cart/action.js";
import SearchProducts from "./SearchProducts.jsx";

const Appbar = () => {
  const dispatch = useDispatch();

  const {currentUser} = useAuth()
  const getuseID = JSON.parse(localStorage.getItem('user'))


    useEffect(()=>{
      
      if(getuseID){
        const userIDobj = {
          userID:getuseID._id
        }
        dispatch(getItems(userIDobj))
        
      }
    },[])

      const data = useSelector((state) => state.cartss);
   


  return (
    <>
      <nav
        className="navbar py-3 navbar-expand-lg sticky-top"
        style={{ backgroundColor: "#f2e9e9" }}
      >
        <div className="container-fluid">
          <NavLink className="nav-link" to={"/"}>
            <img src={logo} className="logo" alt="" />
          </NavLink>
         <SearchProducts/>
          <div className="nav navbar-collapse ms-4" id="navbarSupportedContent">
            <Link
              to={"/shop/diamond"}
              className="text-dark text-decoration-none"
            >
              <div className="mx-3 d-flex flex-column align-items-center">
                <IoDiamondOutline className="icons" />
                <small>DIAMOND</small>
              </div>
            </Link>

            <div className="mx-3 d-flex flex-column align-items-center">
              <LiaStoreAltSolid className="icons" />
              <small>STORE</small>
            </div>

            <div className="loginbtn">
            {currentUser ? (
                <UserDropdown currentUser={currentUser} />
              ) : (
                <LoginDropdown />
              )}
              <div className="mx-3 d-flex flex-column align-items-center">
                <FaRegUser className="icons" />
                <small>
                  {currentUser ? currentUser.name?.toUpperCase() : "ACCOUNT"}
                </small>
              </div>
              
            </div>

            {currentUser?.name == "Super Admin" ? <div className="loginbtn">
            <Link
              to={"/admin/dashboard"}
              className="text-dark text-decoration-none"
            >
            
              <div className="mx-3 d-flex flex-column align-items-center">
                <MdDashboardCustomize className="icons" />
                <small>
                  {"DASHBOARD"}
                </small>
              </div>
              </Link>
              
            </div> : ""}


            <div className="mx-3 d-flex flex-column align-items-center">
              <FaRegHeart className="icons" />
              <small>WISHLIST</small>
            </div>
            <Link className="text-dark text-decoration-none" to={"/cart"}>
              <div className="mx-3 d-flex flex-column align-items-center">
                <Badge badgeContent={data.cartItems.length} color="secondary">
                  <IoCartOutline className="icons" />
                </Badge>
                <small>CART</small>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid">
          <div className="navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-5">
              {navArry.map((nav) => {
                return (
                  <div className="dropdown" key={nav.link}>
                    <NavLink className="nav-link mx-3" to={nav.link}>
                      <span>{nav.compname}</span>
                    </NavLink>
                    <div className="dropdown-content">
                      <div className="link-container">
                        {nav.categories != 0 ? (
                          <h6 className="navinnerheding">CATEGORY</h6>
                        ) : null}
                        {nav.categories.map((category) => {
                          return (
                            <Link
                              to={`/shop/${category.category
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={category.category}
                            >
                              {category.category}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.gender != 0 ? (
                          <h6 className="navinnerheding">GENDER</h6>
                        ) : null}
                        {nav.gender.map((gen) => {
                          return (
                            <Link
                              to={`/shop/${gen.gender
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={gen.gender}
                            >
                              {gen.gender}
                            </Link>
                          );
                        })}
                      </div>

                      <div>
                        {nav.men != 0 ? (
                          <h6 className="navinnerheding">MEN</h6>
                        ) : null}

                        {nav.men.map((men) => {
                          return (
                            <Link
                              to={`/shop/${men.mens
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={men.mens}
                            >
                              {men.mens.split(" ").slice(1)}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.kid != 0 ? (
                          <h6 className="navinnerheding">KIDS</h6>
                        ) : null}

                        {nav.kid.map((kid) => {
                          return (
                            <Link
                              to={`/shop/${kid.kids
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={kid.kids}
                            >
                              {kid.kids.split(" ").slice(1)}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.coins != 0 ? (
                          <h6 className="navinnerheding">GOLD COIN</h6>
                        ) : null}

                        {nav.coins.map((coin) => {
                          return (
                            <Link
                              to={`/shop/${coin.coin
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={coin.coin}
                            >
                              {coin.coin}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.metal != 0 ? (
                          <h6 className="navinnerheding">METAL</h6>
                        ) : null}

                        {nav.metal.map((metal) => {
                          return (
                            <Link
                              to={`/shop/${metal.metal
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={metal.metal}
                            >
                              {metal.metal}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.earrings != 0 ? (
                          <h6 className="navinnerheding">EARRINGS</h6>
                        ) : null}

                        {nav.earrings.map((earrings) => {
                          return (
                            <Link
                              to={`/shop/${earrings.earrings
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={earrings.earrings}
                            >
                              {earrings.earrings}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.rings != 0 ? (
                          <h6 className="navinnerheding">RINGS</h6>
                        ) : null}

                        {nav.rings.map((rings) => {
                          return (
                            <Link
                              to={`/shop/${rings.rings
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={rings.rings}
                            >
                              {rings.rings}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.pendants != 0 ? (
                          <h6 className="navinnerheding">PENDANTS</h6>
                        ) : null}

                        {nav.pendants.map((pendants) => {
                          return (
                            <Link
                              to={`/shop/${pendants.pendants
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={pendants.pendants}
                            >
                              {pendants.pendants}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.style != 0 ? (
                          <h6 className="navinnerheding">STYLE</h6>
                        ) : null}

                        {nav.style.map((style) => {
                          return (
                            <Link
                              to={`/shop/${style.style
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={style.style}
                            >
                              {style.style}
                            </Link>
                          );
                        })}
                      </div>

                      <div>
                        {nav.allrings != 0 ? (
                          <h6 className="navinnerheding">ALL RINGS</h6>
                        ) : null}

                        {nav.allrings.map((allrings) => {
                          return (
                            <Link
                              to={`/shop/${allrings.allrings
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={allrings.allrings}
                            >
                              {allrings.allrings}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.metal_stone != 0 ? (
                          <h6 className="navinnerheding">METAL & STONE</h6>
                        ) : null}

                        {nav.metal_stone.map((metal_stone) => {
                          return (
                            <Link
                              to={`/shop/${metal_stone.metal
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={metal_stone.metal}
                            >
                              {metal_stone.metal}
                            </Link>
                          );
                        })}
                      </div>

                      <div>
                        {nav.occasion != 0 ? (
                          <h6 className="navinnerheding">OCCASION</h6>
                        ) : null}

                        {nav.occasion.map((occasion) => {
                          return (
                            <Link
                              to={`/shop/${occasion.occasion
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={occasion.occasion}
                            >
                              {occasion.occasion}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.priceBrand != 0 ? (
                          <h6 className="navinnerheding">PRICE BRAND</h6>
                        ) : null}

                        {nav.priceBrand.map((price) => {
                          return (
                            <Link
                              to={`/shop/${price.price
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={price.price}
                            >
                              {price.price.split(" ").slice(1)}
                            </Link>
                          );
                        })}
                      </div>
                      <div>
                        {nav.earringGender != 0 ? (
                          <h6 className="navinnerheding">GENDER</h6>
                        ) : null}

                        {nav.earringGender.map((earringGender) => {
                          return (
                            <Link
                              to={`/shop/${earringGender.earringGender
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={earringGender.earringGender}
                            >
                              {earringGender.earringGender}
                            </Link>
                          );
                        })}
                      </div>
                      <div className="link-container">
                        {nav.collection.map((collection) => {
                          return (
                            <Link
                              to={`/shop/${collection.collection
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              key={collection.collection}
                            >
                              {collection.collection}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Appbar;
