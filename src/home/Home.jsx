import { Container, Stack, Box, Typography, Button } from '@mui/material'
// import Carousel from "react-bootstrap/Carousel";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export default function Home() {
  return (
    <Container
      maxWidth='xl'
      style={{
        background: '#c6e1f1',
        margin: 0,
        padding: '10px'
      }}
    >
      <Stack
        flexDirection={{ xs: 'column', sm: 'row' }}
        spacing={4}
        width='100%'
        justifyContent=' space-around'
        alignItems='flex-end'
        marginBottom='50px'
      >
        <Box
          sx={{
            height: '300px',
            width: { xs: '100%', sm: '30%' },
            backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/02/71/77/56/1000_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: ' flex',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ alignSelf: 'self-end' }}>
            <Typography variant='h6'> Don't miss this Sale!</Typography>
            <Typography> Up to 80% off</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: '300px',
            width: { xs: '100%', sm: '30%' },
            backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/02/86/05/43/1000_F_286054327_3WkcLfTcDA8hQp0ph9ThNf7x3MSxwv0q.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: ' flex',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ alignSelf: 'self-end' }}>
            <Typography variant='h6'> Fancy and Casual!</Typography>
            <Typography>You will find what you like here </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: '300px',
            width: { xs: '100%', sm: '30%' },
            backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/02/41/43/18/1000_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: ' flex',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ alignSelf: 'self-end' }}>
            <Typography variant='h6'> Fast and Easy!</Typography>
            <Typography> You will not waste time anymore</Typography>
          </Box>
        </Box>
      </Stack>
      <Box sx={{ margin: 'auto', width: '200px' }}>
        <Button variant='contained' color='info'>Go shopping <ArrowForwardOutlinedIcon /></Button>
      </Box>
    </Container>
  )
}

// <div className="banner">
//   <Carousel data-bs-theme="dark">
//     <Carousel.Item>

//       <img
//         className="d-block w-100"
//         src="https://as1.ftcdn.net/v2/jpg/02/71/77/56/1000_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
//         alt="First slide"
//       />
//       <Carousel.Caption>
//         <h3>Don't miss this Sale!</h3>
//         <p>Up to 80% off</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         src="https://as2.ftcdn.net/v2/jpg/02/86/05/43/1000_F_286054327_3WkcLfTcDA8hQp0ph9ThNf7x3MSxwv0q.jpg"
//         alt="Second slide"
//       />
//       <Carousel.Caption>
//         <h3>Fancy and Casual!</h3>
//         <p>You will find what you like here </p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         src="https://as1.ftcdn.net/v2/jpg/02/41/43/18/1000_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg"
//         alt="Third slide"
//       />
//       <Carousel.Caption>
//         <h3> Fast and Easy! </h3>
//         <p>You will not waste time anymore</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
// </div>
