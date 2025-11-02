// import Carousel from "react-bootstrap/Carousel";
import "./homeStyles.css";
import { Avatar, Typography, Stack } from "@mui/material";
import { InfoCard } from "./InfoCard";

export default function Home() {
  return (
    <div>
      {/* <Carousel data-bs-theme='dark' className="mt-3 p-2"
      >
        <Carousel.Item
          className="backgroundStyles"
          style={{
            backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/02/71/77/56/1000_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg')`,
          }}
        >
          <Carousel.Caption className="text-white">
            <h6>Don't miss this Sale!</h6>
            <p>Up to 80% off</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className="backgroundStyles"
          style={{
            backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/02/86/05/43/1000_F_286054327_3WkcLfTcDA8hQp0ph9ThNf7x3MSxwv0q.jpg')`,
          }}
        >
          <Carousel.Caption className="text-white">
            <h6>Fancy and Casual!</h6>
            <p>You will find what you like here </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className="backgroundStyles"
          style={{
            backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/02/41/43/18/1000_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg')`,
          }}
        >
          <Carousel.Caption className="text-white">
            <h6> Fast and Easy! </h6>
            <p>You will not waste time anymore</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      <Stack direction="row" spacing={2}>
        <div>
          <Avatar src="https://as1.ftcdn.net/v2/jpg/02/71/77/56/1000_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
            alt="shopping"
            sx={{ width: 500, height: 500 }}
            variant="square" />
        </div>
        <div>
          <Typography>
            <h6>Don't miss this Sale!</h6>
            <p>Up to 80% off</p>
          </Typography></div>
      </Stack>
      <InfoCard />
    </div>
  )
}


