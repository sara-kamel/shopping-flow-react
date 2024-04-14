import { useState } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Products from "./Products";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import { countQuantity, getItemsFromLocalStorge } from "./helper";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";
import Box from '@mui/material/Box';
import useSearch from "./useSearch";

export default function App() {
  const [cartCount, setCartCount] = useState(() => {
    const cartList = getItemsFromLocalStorge("cartList");
    return countQuantity(cartList);
  });

  const [keyWordSearch, setKeyWordSearch] = useState("");
  const { filterProducts, onSearch } = useSearch();

  return (
    <div className="nav-bar">
      <Navbar fill bg="info" data-bs-theme="light" sticky="top">
        <Container className="nav-container">
          <h1>Let's Shop</h1>
          <Form className="d-flex">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
              value={keyWordSearch}
              onChange={(e) => setKeyWordSearch(e.target.value)}
            />
            <Button variant="light" onClick={() => onSearch(keyWordSearch)}>
              Search
            </Button>
          </Form>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <div>
            <Link to="/cart">
              Cart <Badge bg="danger">{cartCount}</Badge>
            </Link>
          </div>
          <Link to="/checkout">Checkout </Link>
     
        </Container>
      </Navbar>

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
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Box
      height={50}
      width="100%"
      my={4}
      gap={1}
      p={1}
      sx={{textAlign: "center", background: "#e4eff3"}}
    >
 @2024
    </Box>
    </div>
   
  );
}
