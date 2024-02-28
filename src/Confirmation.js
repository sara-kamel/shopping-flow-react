import { getItemsFromLocalStorge } from "./helper";

export default function Confirmation() {
  const userInformation = getItemsFromLocalStorge("values");
  return (
    <>
      <div>
        <h5> Congratulation  {userInformation.name} you complate shopping!</h5>{" "}
        <span></span>
        <h5>
          {" "}
          your order will arrive on this Adress: {
            userInformation.streetAdress
          }{" "}
          {userInformation.city} {userInformation.zipCode}{" "}
          {userInformation.state} {userInformation.country}
        </h5>
    <h5>We will send the track number to this Email : {userInformation.email}</h5>
      </div>
    </>
  );
}
