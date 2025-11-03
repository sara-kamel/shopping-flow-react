// import Carousel from "react-bootstrap/Carousel";
import "./homeStyles.css";
// import { Avatar, Typography, Stack } from "@mui/material";
import { InfoCard } from "./InfoCard";
import { HomeBanner } from "./HomeBanner";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <InfoCard
        img="https://as1.ftcdn.net/v2/jpg/02/71/77/56/1000_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
        imgTwo="https://as1.ftcdn.net/v2/jpg/02/71/77/56/1000_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
        alt="shoping"
        altTwo="shopping"
        text="Big Savings Await — Grab Your Deal Before It’s Gone!"
        textTwo="New Arrivals Just Dropped — Be the First to Shop!"
        url="/"
      />

    </div>
  )
}


