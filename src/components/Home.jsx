import React, { useEffect, useState } from "react";
import Header from "./Header";
import Products from "./Products";
import { Link } from "react-router-dom";

const Home = ({ cart, setCart, productList, setProductList, totalPrice }) => {
  return (
    <div className="layout">
      <Header />
      <Products
        productList={productList}
        setProductList={setProductList}
        cart={cart}
        setCart={setCart}
      />
      <div className="total-price">
        <h3>Total: ₹ {totalPrice ? totalPrice : " 0"} </h3>
        <Link to={"/checkout"}>
          <button className="orderBtn">Place Order</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
