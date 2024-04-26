import React from "react";

const Product = ({ product, cart, setCart }) => {
  const handleCart = () => {
    const item = product;
    item.count++;
    const newCart = cart ? [...cart, item] : [item];
    setCart(newCart);
  };
  return (
    <div className="card">
      <img src={product.imgURL} alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹ {product.price}</p>
      <p
        style={{
          fontSize: "20px",
        }}
      >
        Count : {product.count}
      </p>
      <div className="">
      <button onClick={handleCart}>Add to cart</button>
      </div>
      
    </div>
  );
};

export default Product;
