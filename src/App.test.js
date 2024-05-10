import { render, screen } from "@testing-library/react";
import { countTotal } from "./helper";

describe("test count total function", () => {
  it("Count total from array ", () => {
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
    const total = countTotal(list);
    expect(total).toBe(60);
  }),
    it("Count total from array with one item ", () => {
      const list = [
        {
          price: 10,
          quantity: 3,
        },
      ];
      const total = countTotal(list);
      expect(total).toBe(30);
    });
  it("one item with quantity 0 ", () => {
    const list = [
      {
        price: 10,
        quantity: 0,
      },
      {
        price: 15,
        quantity: 3,
      },
    ];
    const total = countTotal(list);
    expect(total).toBe(45);
  });
  it("one item with price 0 ", () => {
    const list = [
      {
        price: 0,
        quantity: 10,
      },
      {
        price: 15,
        quantity: 3,
      },
    ];
    const total = countTotal(list);
    expect(total).toBe(45);
  });
});
