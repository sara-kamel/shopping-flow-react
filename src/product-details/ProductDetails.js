import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ProductsList from '../products/ProductsList';
import {
  findItem,
  addNewItemToCart,
  getItemsFromLocalStorge,
  countQuantity,
  setItemInLocalStorge,
} from '../helper/helper';
import Box from '@mui/material/Box';
import { TitleStyles } from '../Styles';
import '../home/homeStyles.css';
import './productStyles.css';

export default function ProductDetails({ onAddToCart }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = findItem(ProductsList, id);
  const [quantity, setQuantity] = useState(1);
  const [cartList, setCartList] = useState(() => getItemsFromLocalStorge('cartList'));

  function onAddProductToCart(product, newCount) {
    const newList = [...cartList];
    let existItem = findItem(newList, product.id);
    if (existItem) {
      existItem.quantity += newCount;
      setCartList(newList);
      console.log(cartList);
      setItemInLocalStorge('cartList', cartList);
      onAddToCart(countQuantity(newList));
    } else {
      addNewItemToCart(newList, product, newCount);
      onAddToCart(countQuantity(newList) + newCount);
    }
  }

  return (
    <>
      <Box sx={TitleStyles}>
        <h1> {product.title} </h1>
      </Box>

      <Carousel key={product.id} data-bs-theme="dark" className="p-2">
        {product.images.map((image, index) => (
          <Carousel.Item
            className="backgroundStyles"
            key={index}
            style={{
              backgroundImage: `url(${image})`,
            }}></Carousel.Item>
        ))}
      </Carousel>
      <Box className="product-information">
        <div className="product-descriptions">
          <h4>
            {product.title} {product.price}$
          </h4>
          <h6>{product.description}</h6>
        </div>
        <div>
          <input
            className=" quantity-field"
            type="number"
            value={quantity}
            onChange={(e) => {
              if (e.target.value >= 1) setQuantity(parseInt(e.target.value));
            }}
          />
          <Button
            className="m-3"
            variant="contained"
            color="info"
            onClick={() => {
              onAddProductToCart(product, quantity);
              alert('Item added to your cart');
              navigate('/cart');
            }}>
            Add To Cart
          </Button>
        </div>
      </Box>
    </>
  );
}
