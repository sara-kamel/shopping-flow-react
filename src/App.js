import { useState } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Products from "./Products";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import { countQuantity } from "./helper";
import Checkout from './Checkout';

import Confirmation from "./Confirmation";

export default function App() {
  const [cartCount, setCartCount] = useState(() => {
    const cartList = localStorage.getItem("cartList");
    if (cartList) {
      return countQuantity(JSON.parse(cartList));
    } else {
      return 0;
    }
  });

  return (
    <div className="nav-bar">
      <Navbar bg="primary" data-bs-theme="dark" sticky="top">
        <Container className="nav-container">
          <Navbar.Brand >Let's Shop</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <div>
            <span>{cartCount}</span>
            <Link to="/cart">Cart</Link>
          </div>
          <Link to="/checkout">Checkout </Link>
          <Link to="/confirmation">Confirmation</Link>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={
            <ProductDetails
              onAddToCart={(newCount) => setCartCount(newCount)}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              onChangeItemsCount={(newCount) => {
                setCartCount(newCount);
              }}
            />
          }
        />
         <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation/>} />
      </Routes>
     
    </div>
  );
}
