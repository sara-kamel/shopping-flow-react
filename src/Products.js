import { Card, Button } from "react-bootstrap";
import ProductsList from "./ProductsList";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyWordSearch, setKeyWordSearch] = useState("");
  const searchItem = searchParams.get("title");
  const onHandleClick = (title) => {
    if (title) {
      setSearchParams({ title });
    } else {
      setSearchParams("");
    }
  };
  const filterProducts = searchItem
    ? ProductsList.filter((p) =>
        p.title.toLowerCase().trim().includes(searchItem.toLowerCase().trim())
      )
    : ProductsList;

  return (
    <>
      <input
        type="text"
        value={keyWordSearch}
        onChange={(e) => setKeyWordSearch(e.target.value)}
      />
      <Button onClick={() => onHandleClick(keyWordSearch)}>Search</Button>
      <div className="products-list">
      {filterProducts.map((product) => (
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
