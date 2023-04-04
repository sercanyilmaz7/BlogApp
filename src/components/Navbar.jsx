import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import clr from "../assets/clr.png";
import useAuthCall from "../hooks/useAuthCall";
import { useSelector } from "react-redux";

const pages = ["DASHBOARD", "NEW BLOG", "ABOUT"];
const settings = ["My-Blogs", "Profile"];

function Navbar() {
    const { logout } = useAuthCall();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
    const { currentUser,image} = useSelector((state) => state.auth);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImageListItem
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              width: 50,
              height: 20,
            }}
            // sx={{ width: 50, height: 20 }}
          >
            <img src={clr} />
          </ImageListItem>

          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            LOGO
          </Typography> */}

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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography onClick={() => navigate("/")} textAlign="center">
                  DASHBOARD
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  onClick={() => navigate("new-blog")}
                  textAlign="center"
                >
                  NEW BLOG
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  onClick={() => navigate("about")}
                  textAlign="center"
                >
                  ABOUT
                </Typography>
              </MenuItem>

              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        
          <ImageListItem
          
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              width: 50,
              height: 20,
            }}
            // sx={{ width: 50, height: 20 }}
          >
            <img src={clr} />
          </ImageListItem>
          
          <Typography
            variant="h5"
            component="a"
            href=""
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
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={(handleCloseNavMenu, () => navigate("/"))}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              DASHBOARD
            </Button>
            <Button
              onClick={(handleCloseNavMenu, () => navigate("new-blog"))}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              NEW BLOG
            </Button>
            <Button
              onClick={(handleCloseNavMenu, () => navigate("about"))}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              ABOUT
            </Button>

            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {currentUser ? (
                  <Avatar alt="Remy Sharp" src={image} />
                ) : (
                  <Avatar alt="Remy Sharp" src={clr} />
                )}
              </IconButton>
            </Tooltip>
            {currentUser ? (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("my-blogs");
                  }}
                >
                  <Typography textAlign="center">My Blogs</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("profile");
                  }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    logout();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            ) : (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  // onClick={
                  //   (handleCloseUserMenu, () => navigate("login"))
                  // }
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("login");
                  }}
                >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

{
  /* <MenuItem
                onClick={(handleCloseUserMenu, () => navigate("my-blogs"))}
              >
                <Typography textAlign="center">My Blogs</Typography>
              </MenuItem>
              <MenuItem
                onClick={(handleCloseUserMenu, () => navigate("profile"))}
              >
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem
                onClick={(handleCloseUserMenu, () => navigate("logout"))}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem> */
}
