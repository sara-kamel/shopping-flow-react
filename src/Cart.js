
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import { countTotal, updateCartQuantity, countQuantity } from "./helper";
import useLocalStorage from "./useLocalStorage";

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
    <section className="cart-container">
      <h1>Your Cart</h1>
      <article>
        {cartList.map((product) => (
          <Card className="cart-product" key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title
                title="show product"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
              >
                {product.title}{" "}
              </Card.Title>
              <h1>{product.price}</h1>
            </Card.Body>

            <Form.Label>Quantity</Form.Label>
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
              variant="outline-info"
              onClick={() => {
                setCartList(cartList.filter((p) => p.id !== product.id));
                onChangeItemsCount(countQuantity(cartList) - product.quantity);
              }}
            >
              &#127485;
            </Button>
          </Card>
        ))}
      </article>
      <br />
      <hr />

      <div>
        <h5>price: {total.toFixed(2)}</h5>
        <h5>tax: {tax.toFixed(2)}</h5>
        <h5> total: {totalPrice.toFixed(2)}</h5>

        <Button variant="outline-info" onClick={() => navigate("/checkout")}>
          Check Out
        </Button>
        <br />
        <Button variant="outline-info" onClick={() => navigate("/products")}>
          go to shopping list
        </Button>
      </div>
    </section>
  );
}
