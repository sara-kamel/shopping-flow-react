import { NavLink } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Alert, CardActionArea, CardActions } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { TitleStyles, ProductsGridStyles } from '../Styles'
import { useNavigate } from 'react-router-dom'

export default function Products ({ products }) {
  const navigate = useNavigate()
  return (
    <div>
      <Box sx={TitleStyles}>
        <h1> Products List </h1>
      </Box>
      <Alert severity='success'>
        {!products.length > 0 &&
          'There are no matching products for your search '}
        {products.length > 0 && products.length === 1
          ? 'There is 1 product.'
          : `There are ${products.length} products`}
      </Alert>
      <br />
      <Grid spacing={2} container style={ProductsGridStyles}>
        {products.map(product => (
          <Card key={product.id} sx={{ maxWidth: 345, marginTop: '10px' }}>
            <CardActionArea onClick={() => navigate(`/products/${product.id}`)}>
              <CardMedia
                component='img'
                height='140'
                image={product.images[0]}
                alt='product'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {product.title} {product.price}$
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <NavLink to={`/products/${product.id}`}>
                <Button>see more</Button>
              </NavLink>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </div>
  )
}
