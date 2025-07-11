import React from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/actions/productActions";

const Product_Card = ({ data }) => {
  const dispatch = useDispatch();
  const cartHandler = (data) => {
    dispatch(updateCart(data));
  };
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={data.thumbnail}
        alt={data.title}
        loading="lazy"
      />
      <p>{data.title}</p>
      <p>${data.price}</p>
      <button className="cart-button" onClick={() => cartHandler(data)}>
        🛒 Add To Cart
      </button>
    </div>
  );
};

export default Product_Card;
