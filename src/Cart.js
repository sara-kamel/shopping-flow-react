import { useNavigate } from "react-router-dom";
import { countTotal, updateCartQuantity, countQuantity } from "./helper";
import useLocalStorage from "./useLocalStorage";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";
import { Box } from "@mui/material";
import {
  TitleStyles,
  CardBodystyles,
  CardStyles,
  CartFooterStyles,
  CartImgStyles,
} from "./Styles";

export default function Cart({ onChangeItemsCount }) {
  const navigate = useNavigate();
  const { items: cartList, setItems: setCartList } =
    useLocalStorage("cartList");

  function onHandleChange(list, id, newQuantity) {
    const newList = updateCartQuantity(list, id, newQuantity);
    setCartList(newList);
    onChangeItemsCount(countQuantity(newList));
  }

  const total = countTotal(cartList);
  const tax = total * 0.07;
  const totalPrice = total + tax;

  return (
    <>
      <Box sx={TitleStyles}>
        <h1> Your Cart </h1>
      </Box>

      <Stack direction="horizontal" gap={3} style={{ flexWrap: "wrap" }}>
        {cartList.map((product) => (
          <Card key={product.id} style={CardStyles} className="p-2">
            <Card.Body style={CardBodystyles}>
              <Card.Img
                variant="top"
                src={product.image}
                style={CartImgStyles}
              />

              <Card.Title
                title="show product"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
              >
                {product.title}
              </Card.Title>
              <h1>{product.price}$</h1>
            </Card.Body>
            <Card.Footer style={CartFooterStyles}>
              <Form.Label>
                <b>Quantity</b>
              </Form.Label>

              <Form.Control
                type="number"
                value={product.quantity}
                onChange={(e) => {
                  if (e.target.value >= 1) {
                    onHandleChange(
                      cartList,
                      product.id,
                      parseInt(e.target.value)
                    );
                  }
                }}
              />
              <Button
                variant="danger"
                onClick={() => {
                  setCartList(cartList.filter((p) => p.id !== product.id));
                  onChangeItemsCount(
                    countQuantity(cartList) - product.quantity
                  );
                }}
              >
                Delete
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </Stack>

      <hr />
      <div>
        <h5>price: {total.toFixed(2)}</h5>
        <h5>tax: {tax.toFixed(2)}</h5>
        <h5> total: {totalPrice.toFixed(2)}</h5>
        <Button variant="outline-info" onClick={() => navigate("/checkout")}>
          Check Out
        </Button>
        <Button variant="outline-info" onClick={() => navigate("/products")}>
          go to shopping list
        </Button>
      </div>
    </>
  );
}
