import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TitleStyles } from "./Styles";


export default function Products({ products }) {
  return (
    <>
       <Box
      sx={TitleStyles}
    >
  <h1> Products List </h1>
    </Box>
      <Grid
        spacing={2}
        container
        xs={12}
        style={{background:'#c6e1f1', margin: "auto"}}
        gap={2}
        justifyContent="center"     
        padding= "15px"
        
      >
        {products.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 345, marginTop:"10px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                
                height="140"
                image={product.images[0]}
                alt="product"
              />
              <CardContent style={{background: "#cbf1f3"}}>
                <Typography gutterBottom variant="h5" component="div" >
                  {product.title} {product.price}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <NavLink to={`/products/${product.id}`}><Button >see more</Button></NavLink>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </>
  );
}
