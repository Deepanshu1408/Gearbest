import React from "react";
import "../Navbar/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="top_headerMain">
        <div className="top_header1">
          <PhoneIphoneOutlinedIcon />
          <span className="top_headingSpan">Save $3 with App</span>
        </div>
        <div className="top_heading2">
          <span>Support Center</span>
        </div>
        <div className="top_heading2">
          <span>Ship To</span>
          <img
            className="indianFlag"
            src="https://uidesign.gbtcdn.com/GB/app/2018/flag_png/in.png"
          />
          <span>/ USD</span>
        </div>
        <div className="top_heading2">
          <span>Languages</span>
        </div>
        <div className="top_heading2">
          <span>Country Website</span>
        </div>
      </div>
      <nav className="header">
        {/* logo on the left */}
        <img
          className="header_logo"
          src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png?imbypass=true"
        />
        {/* Search bar */}

        <div className="header_search">
          <input
            type="text"
            className="header_searchInput"
            placeholder="Enter items to search"
          />
          <SearchIcon
            className="header_SearchIcon"
            onClick={() => {
              alert("This is the dummy website");
            }}
          />
        </div>

        <div className="header_Nav">
          <div className="header_option">
            <PermIdentityTwoToneIcon />

            <span
              onClick={() => {
                prompt("Enter user User ID");
              }}
            >
              Sign In
            </span>
          </div>

          <div className="header_option">
            <FavoriteTwoToneIcon />
            <span
              onClick={() => {
                alert("There is no favourite item");
              }}
            >
              Favorites
            </span>
          </div>

          <div className="header_option">
            <ShoppingCartTwoToneIcon className="carticon" />

            <span
              onClick={() => {
                alert("Opps!! The cart is empty");
              }}
            >
              Cart
            </span>
          </div>
        </div>
      </nav>
      <div className="bottom_header">
        <div className="bottom_headerMenu">
          <MenuIcon style={{ marginRight: "5px" }} />

          <span>Category</span>
        </div>
        <div className="bottom_headerMenu1">
          <span>NEW ARRIVALS</span>
        </div>
        <div className="bottom_headerMenu1">
          <span>DEALS</span>
        </div>
        <div className="bottom_headerMenu1">
          <span>COUPONS</span>
        </div>
        <div className="bottom_headerMenu1">
          <span>COMMUNITY</span>
        </div>
      </div>
    </>
  );
};

export default Header;
