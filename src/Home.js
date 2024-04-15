import sale from "./assets/sale.jpg";
import shopping2 from "./assets/shopping2.jpg";
import shopping4 from "./assets/shopping4.jpg";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div className="banner">
    <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img className="d-block w-100" src={sale} alt="First slide" />
        <Carousel.Caption>
          <h3>Don't Miss The Annual Sale</h3>
          <p>up to 80% off</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={shopping2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Fancy and Casual</h3>
          <p>you will found your favorite style here. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={shopping4} alt="Third slide" />
        <Carousel.Caption>
          <h3> Fast and Easy!! </h3>
          <p>you do not weast your time in shopping any more</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
