import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

it("test cart count ", () => {
  render(
    <MemoryRouter>
      <NavBar cartCount={10} />
    </MemoryRouter>
  );
  const cartCountElement = screen.getByTestId("cart-Count");
  expect(cartCountElement).toBeInTheDocument();
});



