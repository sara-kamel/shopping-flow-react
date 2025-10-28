import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Products from './Products';

describe('', () => {
  it('test message for user when is there are no products matching his search ', () => {
    render(<Products products={[]} />);
    const messageElement = screen.getByText(/There are No matching products for your search/i);
    expect(messageElement).toBeInTheDocument();
  });
  it('no message for user when is there are products matching his search ', () => {
    render(
      <MemoryRouter>
        <Products
          products={[
            {
              id: 'c4f35f6d-2a57-417c-9ce9-9e7a1c529a89',
              title: 'Wireless Charging Pad',
              description: 'Qi-compatible wireless charging pad for your devices.',
              images: [
                'https://m.media-amazon.com/images/I/51Rg-W1lUBL._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg',
                'https://m.media-amazon.com/images/I/61o3PAyAqML._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg',
              ],
              price: 29.95,
            },
          ]}
        />
      </MemoryRouter>
    );
    const messageElement = screen.queryByText(/There are No matching products for your search/i);
    expect(messageElement).not.toBeInTheDocument();
  });
});
