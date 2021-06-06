import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./style";
import { NavLink, withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Header = (props) => {
  const { history } = props;
  // console.log(props);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("KhachHang"));
  console.log(user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar
          className={`d-flex align-items-center justify-content-between ${classes.header}`}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            onClick={() => handleMenuClick("/")}
          >
            <NavLink to="/" className={classes.brand}>
              hoang
            </NavLink>
          </div>
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {localStorage.getItem("KhachHang") ? (
                  <MenuItem onClick={() => handleMenuClick("/memberShip")}>
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle />
                      <Typography>{user.hoTen}</Typography>
                    </IconButton>
                  </MenuItem>
                ) : (
                  <MenuItem onClick={() => handleMenuClick("/sign")}>
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle />
                      <Typography>Đăng nhập</Typography>
                    </IconButton>
                  </MenuItem>
                )}
                <MenuItem
                  className={`${classes.menuItem} `}
                  onClick={() => handleMenuClick("#lichChieu")}
                  href="#lichChieu"
                >
                  Lịch chiếu
                </MenuItem>
                <MenuItem
                  className={`${classes.menuItem} `}
                  onClick={() => handleMenuClick("/")}
                >
                  Cụm rạp
                </MenuItem>
                <MenuItem
                  className={`${classes.menuItem} `}
                  onClick={() => handleMenuClick("/")}
                >
                  Tin tức
                </MenuItem>
                <MenuItem
                  className={`${classes.menuItem} `}
                  onClick={() => handleMenuClick("/")}
                >
                  Ứng dụng
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <>
              <MenuItem
                className={`${classes.menuItem} `}
                onClick={() => handleMenuClick("/")}
              >
                Lịch chiếu
              </MenuItem>
              <MenuItem
                className={`${classes.menuItem} `}
                onClick={() => handleMenuClick("/")}
              >
                Cụm rạp
              </MenuItem>
              <MenuItem
                className={`${classes.menuItem} `}
                onClick={() => handleMenuClick("/")}
              >
                Tin tức
              </MenuItem>
              <MenuItem
                className={`${classes.menuItem} `}
                onClick={() => handleMenuClick("/")}
              >
                Ứng dụng
              </MenuItem>
              {localStorage.getItem("KhachHang") ? (
                <MenuItem onClick={() => handleMenuClick("/memberShip")}>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                    <Typography>{user.hoTen}</Typography>
                  </IconButton>
                  
                </MenuItem>
              ) : (
                <MenuItem onClick={() => handleMenuClick("/sign")}>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                    <Typography>Đăng nhập</Typography>
                  </IconButton>
                </MenuItem>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
