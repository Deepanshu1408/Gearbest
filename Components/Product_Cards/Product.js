import React from "react";
import "./Product.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Product = ({ id, image, title, rating, price, discounted_Price }) => {
  return (
    <div className="product">
      <img src={image} alt="" />
      <p>{title}</p>
      <p className="procuct_price">
        <span className="rrp">RRP</span>
        <small className="cut">$</small>
        <strong className="cut">{price}</strong>
      </p>
      <div className="AddToBasket">
        <p className="Discount_Price">
          <small>$</small>
          <strong>{discounted_Price}</strong>
        </p>
        <Link>
          <ShoppingCartIcon fontSize="large" className="basketIcon" />
        </Link>
      </div>
    </div>
  );
};

export default Product;
