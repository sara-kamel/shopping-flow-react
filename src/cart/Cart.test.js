import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Cart from './Cart'
import useLocalStorage from '../useLocalStorage'

jest.mock('../useLocalStorage', () => ({
  __esModule: true,
  default: jest.fn()
}))

describe('cart testing', () => {
  const mockfunction = jest.fn()

  beforeEach(() => {
    useLocalStorage.mockReturnValue({
      items: [
        {
          id: 1,
          title: 'Product 1',
          price: 100,
          quantity: 2,
          image: 'image1.jpg'
        },
        {
          id: 2,
          title: 'Product 2',
          price: 100,
          quantity: 2,
          image: 'image2.jpg'
        }
      ],
      setItems: jest.fn()
    })
  })

  it('onChangeItemsCount function should call when click on delete button', () => {
    render(
      <MemoryRouter>
        <Cart onChangeItemsCount={mockfunction} />
      </MemoryRouter>
    )
    const product1 = screen.getByText('Product 1')
    const product2 = screen.getByText('Product 2')
    expect(product1).toBeInTheDocument()
    expect(product2).toBeInTheDocument()

    const deleteButton = screen.getAllByTestId('delete-button')
    fireEvent.click(deleteButton[0])
    expect(mockfunction).toHaveBeenCalled()
  })
})
