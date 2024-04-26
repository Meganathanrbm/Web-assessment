import React from "react";
import Product from "./Product";

const Products = ({ cart, setCart, productList, setProductList }) => {
  return (
    <div>
      <ul className="products-container">
        {productList.map((product, index) => (
          <li key={index}>
            <Product
              productList={productList}
              setProductList={setProductList}
              setCart={setCart}
              cart={cart}
              product={product}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
