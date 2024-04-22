import { useState } from "react";
import "./style.css";
import Products from "./Products";
import Home from "./Home";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { countQuantity, getItemsFromLocalStorge } from "./helper";
import Checkout from "./Checkout";
import Box from "@mui/material/Box";
import useSearch from "./useSearch";
import NavBar from "./NavBar";
import {FooterStyles} from './Styles'



export default function App() {
  const [cartCount, setCartCount] = useState(() => {
    const cartList = getItemsFromLocalStorge("cartList");
    return countQuantity(cartList);
  });

  const { filterProducts } = useSearch();

  return (
    <>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products products={filterProducts} />}
        />
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
      </Routes>
      <footer>
        <Box sx={FooterStyles}>
          @2024
        </Box>
      </footer>
    </>
  );
}
