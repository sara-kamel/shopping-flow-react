import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Cart from './cart/Cart'

const mockfunction = jest.fn()
describe('cart testing', () => {
  it('onChangeItemsCount function should call when click on delete button', () => {
    render(
      <MemoryRouter>
        <Cart onChangeItemsCount={mockfunction} />
      </MemoryRouter>
    )
    const cartItems = screen.getByTestId('cart-items')
    const deleteButton = within(cartItems).getAllByRole('button', {
      name: /delete/i
    })
    fireEvent.click(deleteButton)
    expect(onChangeItemsCount).toHaveBeenCalled()
  })
})
