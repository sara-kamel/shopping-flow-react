import { render, screen } from "@testing-library/react";
import { countTotal } from "./helper";

const list = [
  {
    price: 10,
    quantity: 3,
  },
  {
    price: 5,
    quantity: 2,
  },
  {
    price: 20,
    quantity: 1,
  },
];

test("Count total from array ", () => {
    const total = countTotal(list);
  expect(total).toBe(60);
});
