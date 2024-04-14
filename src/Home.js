import sale from "./assets/sale.jpg";
import shopping1 from "./assets/shopping1.jpg";
import shopping2 from "./assets/shopping2.jpg";
import shopping3 from "./assets/shopping3.jpg";
import shopping4 from "./assets/shopping4.jpg";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
<>
    <Carousel className="banner">
      <Carousel.Item>
        <img src={sale} alt="sale" />
        <Carousel.Caption>
          <h3>Don't Miss The Annual Sale</h3>
          <p>up to 80% off</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={shopping4} alt="shopping online" />
        <Carousel.Caption>
          <h3> Fast and Easy!! </h3>
          <p>you do not weast your time in shopping any more</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={shopping2} alt="shopping online" />
        <Carousel.Caption>
          <h3>Fancy and Casual</h3>
          <p>
           you will found your favorite style here.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
