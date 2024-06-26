
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div className="banner">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          
          <img
            className="d-block w-100"
            src="https://as1.ftcdn.net/v2/jpg/02/71/77/56/1000_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Don't miss this Sale!</h3>
            <p>Up to 80% off</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://as2.ftcdn.net/v2/jpg/02/86/05/43/1000_F_286054327_3WkcLfTcDA8hQp0ph9ThNf7x3MSxwv0q.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Fancy and Casual!</h3>
            <p>You will find what you like here </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://as1.ftcdn.net/v2/jpg/02/41/43/18/1000_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3> Fast and Easy! </h3>
            <p>You will not waste time anymore</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
