import { useNavigate } from 'react-router-dom'
import { countTotal, updateCartQuantity, countQuantity } from '../helper/helper'
import useLocalStorage from '../useLocalStorage'
import Form from 'react-bootstrap/Form'
import { Box, Stack, Typography, Button } from '@mui/material'
import { TitleStyles } from '../Styles'
import {
  ProductCardStyles,
  CardFooterStyles,
  CardImgStyles,
  BillFieldStyles,
  CartButtonsStyles,
  ContainerStyles
} from './CartStyles'

export default function Cart({ onChangeItemsCount }) {
  const navigate = useNavigate()
  const { items: cartList, setItems: setCartList } = useLocalStorage('cartList')

  function onHandleChange(list, id, newQuantity) {
    const newList = updateCartQuantity(list, id, newQuantity)
    setCartList(newList)
    onChangeItemsCount(countQuantity(newList))
  }

  const total = countTotal(cartList)
  const tax = total * 0.07
  const totalPrice = total + tax

  return (
    <>
      <Box sx={TitleStyles}>
        <h1> Your Cart </h1>
      </Box>

      <ContainerStyles>
        {cartList.map(product => (
          <ProductCardStyles key={product.id} spacing={5}>
            <Stack flexDirection='row' justifyContent='space-between'>
              <img src={product.image} style={CardImgStyles} alt='product' />

              <Typography
                variant='h6'
                title='show product'
                style={{ cursor: 'pointer', textAlign: 'center' }}
                onClick={() => {
                  navigate(`/products/${product.id}`)
                }}
              >
                {product.title}
                <h6>{product.price}$</h6>
              </Typography>
            </Stack>
            <Form style={CardFooterStyles}>
              <Form.Label>
                <b>Quantity</b>
              </Form.Label>

              <Form.Control
                type='number'
                value={product.quantity}
                onChange={e => {
                  if (e.target.value >= 1) {
                    onHandleChange(
                      cartList,
                      product.id,
                      parseInt(e.target.value)
                    )
                  }
                }}
              />
              <Button
                data-testid='delete-button'
                variant='contained'
                color='warning'
                onClick={() => {
                  setCartList(cartList.filter(p => p.id !== product.id))
                  onChangeItemsCount(countQuantity(cartList) - product.quantity)
                }}
              >
                Delete
              </Button>
            </Form>
          </ProductCardStyles>
        ))}
      </ContainerStyles>

      <hr />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <BillFieldStyles>
          <h6>Price</h6>
          <aside>{total.toFixed(2)}$</aside>
        </BillFieldStyles>
        <BillFieldStyles>
          <h6>Tax </h6> <aside>{tax.toFixed(2)}$</aside>
        </BillFieldStyles>
        <BillFieldStyles>
          <h6>Total </h6> <aside>{totalPrice.toFixed(2)}$</aside>
        </BillFieldStyles>
      </Stack>
      <CartButtonsStyles>
        <Button variant='outlined' onClick={() => navigate('/checkout')}>
          Checkout
        </Button>
        <Button variant='outlined' onClick={() => navigate('/products')}>
          Continue shopping
        </Button>
      </CartButtonsStyles>
    </>
  )
}
