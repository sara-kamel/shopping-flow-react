import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'
import useSearch from '../useSearch'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import { StyledBadge, StyledTypography, StyledHeaderIconSmall, StyledHeaderIconLarge, StyledInputField, StyledSearchButton } from './NavBarStyles'

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
      <Container maxWidth='xl'>
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
              <StyledHeaderIconSmall />
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
            <StyledHeaderIconLarge />
          </IconButton>
          <StyledTypography
            variant='h5'
            noWrap
          >
            Shopping
          </StyledTypography>
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
          <StyledInputField
            data-testid='search-input'
            type='text'
            value={keyWordSearch}
            onChange={e => setKeyWordSearch(e.target.value)}
          />
          <StyledSearchButton
            onClick={() => {
              if (keyWordSearch) {
                onSearch(keyWordSearch)
                navigate(`/products?title=${keyWordSearch}`)
                setKeyWordSearch('')
              }
            }}
          >
            Search
          </StyledSearchButton>
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
