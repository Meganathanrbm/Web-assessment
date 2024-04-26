import { useEffect, useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";

function App() {
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "Note Book",
      imgURL:
        "https://static.wixstatic.com/media/cb219e_c3b6542757d842778f0640bf9675dea4~mv2.jpg/v1/fill/w_394,h_525,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cb219e_c3b6542757d842778f0640bf9675dea4~mv2.jpg",
      price: 100,
      count: 0,
    },
    {
      id: 2,
      name: "Water Bottle",
      imgURL:
        "https://static.wixstatic.com/media/cb219e_6629209c856b41fb932516940a297176~mv2.jpg/v1/fill/w_394,h_525,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cb219e_6629209c856b41fb932516940a297176~mv2.jpg",
      price: 200,
      count: 0,
    },
  ]);
  useEffect(() => {
    const calculateTotalPrice = productList.reduce(
      (accumulator, currentProduct) => {
        return accumulator + currentProduct.count * currentProduct.price;
      },
      0
    );

    setTotalPrice(calculateTotalPrice);
  }, [cart]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cart={cart}
            totalPrice={totalPrice}
            productList={productList}
            setCart={setCart}
            setTotalPrice={setTotalPrice}
            setProductList={setProductList}
          />
        }
      />
      <Route
        path="/checkout"
        element={<CheckOut productList={productList} />}
      />
    </Routes>
  );
}

export default App;
