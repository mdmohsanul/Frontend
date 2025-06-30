import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((state) => state);
  return (
    <>
      <li>
        {" "}
        <Link to="/">Products</Link>
      </li>
      <li>
        {" "}
        <Link to="/cart">Cart {cart.length}</Link>
      </li>
    </>
  );
};

export default Header;
