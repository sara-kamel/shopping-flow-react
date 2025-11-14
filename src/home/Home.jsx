
import "./homeStyles.css";
import { InfoCard } from "./InfoCard";
import { HomeBanner } from "./HomeBanner";
import shoppingItems from "./images/shopping-items.jpg";
import orderComplete from "./images/order-complete.jpg"
import { Category } from "./Category";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <InfoCard
        img={shoppingItems}
        imgTwo={orderComplete}
        alt="Shopping items"
        altTwo="order picture"
        text="Big Savings Await — Grab Your Deal Before It’s Gone!"
        textTwo="New Arrivals Just Dropped — Be the First to Shop!"
        url="/products"
        urlTwo="/products"
      />
      <br />
      <br />
      <Category />
    </div>
  )
}


