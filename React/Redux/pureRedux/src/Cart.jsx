import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  return (
    <>
      <div>
        <h1>Cart</h1>
      </div>
    </>
  );
};

export default Cart;
