import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';
import ProductsList from './ProductsList';
import {
  findItem,
  addNewItemToCart,
  getItemsFromLocalStorge,
  countQuantity,
  setItemInLocalStorge
} from './helper';

export default function ProductDetails({ onAddToCart }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = findItem(ProductsList, id);
  const [quantity, setQuantity] = useState(1);
  const [cartList, setCartList] = useState(() => getItemsFromLocalStorge());

  function onAddProductToCart(product, newCount) {
    const newList = [...cartList];
    let existItem = findItem(newList, product.id);
    if (existItem) {
      existItem.quantity += newCount;
      setCartList(newList);
      onAddToCart(countQuantity(newList));
      setItemInLocalStorge("cartList", cartList)
    } else {
      addNewItemToCart(newList, product, newCount);
      onAddToCart(countQuantity(newList) + newCount);
    }
  }

  return (
    <>
      <Carousel key={product.id}>
        <Carousel.Item>
          <img
            className="d-block  w-100"
            src={product.images[0]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={product.images[1]}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <div style={{ color: 'green' }}>
        <h5>
          {product.title}{' '}
          <span style={{ border: '1px solid gray', padding: '4px' }}>
            {product.price}$
          </span>
        </h5>
        <p>{product.description}</p>
      </div>
      <input
        style={{ width: '80px' }}
        type="number"
        value={quantity}
        onChange={(e) => {
          if (e.target.value >= 1) setQuantity(parseInt(e.target.value));
        }}
      />
      <Button
        onClick={() => {
          onAddProductToCart(product, quantity);
          navigate('/cart');
        }}
      >
        Add To Cart
      </Button>
    </>
  );
}
