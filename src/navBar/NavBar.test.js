import { fireEvent, render, screen, within } from "@testing-library/react";
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

describe("input element", () => {
  it("should render input element", () => {
    render(
      <MemoryRouter>
        <NavBar cartCount={10} />
      </MemoryRouter>
    );
    const inputElement = screen.getByTestId("search-input");
    expect(inputElement).toBeInTheDocument();
  }),
    it("input value should change", () => {
      render(
        <MemoryRouter>
          <NavBar cartCount={10} />
        </MemoryRouter>
      );
      const inputWrapper = screen.getByTestId("search-input");
      const inputElement = within(inputWrapper).getByRole("textbox");
      fireEvent.change(inputElement, { target: { value: "smart phone" } });
      expect(inputElement.value).toBe("smart phone");
    });
  it("should have empty element when search button is clicked", () => {
    render(
      <MemoryRouter>
        <NavBar cartCount={10} />
      </MemoryRouter>
    );
    const inputWrapper = screen.getByTestId("search-input");
    const inputElement = within(inputWrapper).getByRole("textbox");
    const buttonElement = screen.getByRole("button", { name: /Search/i });
    fireEvent.change(inputElement, { target: { value: "smart phone" } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
