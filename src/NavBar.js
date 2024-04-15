import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Badge, Input } from "@mui/material";
import { Link } from "react-router-dom";
import useSearch from "./useSearch";
import { useNavigate } from "react-router-dom";

const pages = [
  { pageName: "Home", pageLink: "/" },
  { pageName: "Products", pageLink: "/products" },
  { pageName: "Cart", pageLink: "/cart" },
];

function NavBar({ cartCount }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [keyWordSearch, setKeyWordSearch] = useState(null);
  const navigate = useNavigate(null);
  const { onSearch } = useSearch("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shopping
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.pageName} onClick={handleCloseNavMenu}>
                  <Link to={page.pageLink}>
                    <Button>
                      {page.pageName}
                      {page.pageName === "cart" ? (
                        <Badge>{cartCount}</Badge>
                      ) : (
                        ""
                      )}
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shopping
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.pageName} to={page.pageLink}>
                <Button style={{ color: "white" }} onClick={handleCloseNavMenu}>
                  {page.pageName}
                  {page.pageName === "Cart" ? <Badge>{cartCount}</Badge> : ""}
                </Button>
              </Link>
            ))}
          </Box>
          <Input
            style={{ color: "white" }}
            type="text"
            label="Search input"
            value={keyWordSearch}
            onChange={(e) => setKeyWordSearch(e.target.value)}
          />
          <Button
            variant="light"
            onClick={() => {
              onSearch(keyWordSearch);
              navigate(`/products?title=${keyWordSearch}`);
            }}
          >
            Search
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;