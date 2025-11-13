
import "./homeStyles.css";
import { InfoCard } from "./InfoCard";
import { HomeBanner } from "./HomeBanner";
import shoppingItems from "./shopping-items.jpg";
import orderComplete from "./order-complete.jpg"

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

    </div>
  )
}


