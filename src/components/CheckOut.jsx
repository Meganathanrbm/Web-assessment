import React from "react";
import Header from "./Header";

const CheckOut = ({ productList }) => {
  return (
    <div className="layout">
      <Header />
      <div className="products-container">
        {productList.map((item, i) => (
          <div key={i} className="card">
            <img src={item.imgURL} alt={item.name} />
            <h2>{item.name}</h2>
            <p>₹ {item.price}</p>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              Count : {item.count}
            </p>
          </div>
        ))}
      </div>
      <div className="">
        {/* <form action="">
            <label htmlFor="username">Username</label>
        </form> */}
      </div>
    </div>
  );
};

export default CheckOut;
