import { Box, Stack, styled } from '@mui/material'

export const ProductCardStyles = styled(Stack)(({ theme }) => ({
  border: '1px solid #9f9f9f52',
  borderRadius: '5px',
  padding: '20px',
  marginTop: '10px',
  width: '100%',
  gap: '15',
  [theme.breakpoints.up('sm')]: {
    width: ' 48%',
    padding: '10px',
    margin: '5px'
  },
  [theme.breakpoints.up('md')]: {
    width: '400px',
    margin: '15px',
    padding: '20px'
  }
}))

export const ContainerStyles = styled(Stack)(({ theme }) => ({
  flexWrap: 'wrap',
  padding: '10px',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
}))

export const CardImgStyles = { height: '100px', width: '100px' }
export const CardFooterStyles = {
  borderTop: '1px solid #9f9f9f52',
  paddingTop: '15px',
  display: 'flex',
  alignContent: 'baseline',
  gap: '10px'
}

export const BillFieldStyles = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-between',
  width: '100%',
  flexDirection: 'row',
  padding: theme.spacing(1),
  borderBottom: '1px solid #9f9f9f52'
}))

export const CartButtonsStyles = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(2.5)
}))
