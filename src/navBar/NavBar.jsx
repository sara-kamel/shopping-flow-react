import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Input } from '@mui/material'
import { Link } from 'react-router-dom'
import useSearch from '../useSearch'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { StyledBadge } from './NavBarStyles'

const pages = [
  { pageName: 'Home', pageLink: '/' },
  { pageName: 'Products', pageLink: '/products' }
]

function NavBar({ cartCount }) {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [keyWordSearch, setKeyWordSearch] = useState('')
  const navigate = useNavigate(null)
  const { onSearch } = useSearch()

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='static'>
      <Container  maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: { xs: 1, sm: 0 },
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon sx={{ fontSize: { xs: '20px', sm: '40px' } }} />
              <MonetizationOnOutlinedIcon
                sx={{
                  display: { xs: 'inherit', sm: 'none' },
                  width: '2rem',
                  height: '2rem'
                }}
              />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map(page => (
                <MenuItem key={page.pageName} onClick={handleCloseNavMenu}>
                  <Link to={page.pageLink}>
                    <Button>{page.pageName}</Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton color='inherit'>
            <MonetizationOnOutlinedIcon
              sx={{
                display: { xs: 'none', sm: 'flex' },
                width: '2.5rem',
                height: '2.5rem'
              }}
            />
          </IconButton>
          <Typography
            variant='h5'
            noWrap
            sx={{
              flexGrow: { sm: 1, md: 0 },
              display: { xs: 'none', sm: 'flex' },
              width: { sm: '35%', md: 'auto' },
              fontFamily: 'monospace',
              fontWeight: 700,
              padding: '10px',
              letterSpacing: { xs: 'none', sm: '.2rem', md: '.5rem' },
              color: 'inherit'
            }}
          >
          Shopping
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center'
            }}
          >
            {pages.map(page => (
              <Link key={page.pageName} to={page.pageLink}>
                <Button style={{ color: 'white' }}>{page.pageName}</Button>
              </Link>
            ))}
          </Box>
          <Input
            data-testid='search-input'
            style={{ color: 'white' }}
            type='text'
            label='Search input'
            value={keyWordSearch}
            onChange={e => setKeyWordSearch(e.target.value)}
          />
          <Button
            color='inherit'
            onClick={() => {
              if (keyWordSearch) {
                onSearch(keyWordSearch)
                navigate(`/products?title=${keyWordSearch}`)
                setKeyWordSearch('')
              }
            }}
          >
            Search
          </Button>
          <Link to={'/cart'}>
            <IconButton aria-label='cart'>
              <StyledBadge
                badgeContent={cartCount}
                color='secondary'
                data-testid='cart-Count'
              >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
