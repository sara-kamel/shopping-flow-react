import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Products({ products }) {
  return (
    <>
      <div className="products-list">
        {products.map((product) => (
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.images[0]} />
            <Card.Body>
              <Card.Title>
                {product.title} <span>{product.price}</span>
              </Card.Title>
              <Card.Text>{product.description}</Card.Text>

              <NavLink to={`/products/${product.id}`}>see more</NavLink>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
