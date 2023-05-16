// ---| React Imports |---
import React, { useState } from "react";

// ---| React Router Dom Imports |---
import { NavLink, useLocation } from "react-router-dom";

// ---| MUI Imports |---
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

// ---| Project Imports |---
import { useStyles } from "./MainNavbar-styles";
import { ReactComponent as TruckLogo } from "../../assets/images/truck.svg";
import {
  Close,
  Facebook,
  Instagram,
  LinkedIn,
  Menu,
  Twitter,
} from "@mui/icons-material";

const MainNavbar = (props) => {
  const { window } = props;
  const drawerWidth = "240px";
  const styleClass = useStyles();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const menuItems = [
    { name: "home", link: "/" },
    { name: "about us", link: "/about" },
    { name: "company", link: "/company" },
    { name: "our services", link: "/services" },
    { name: "contact us", link: "/contact" },
  ];

  const socialItems = [
    { icon: <Instagram />, link: "www.instagram.com/" },
    { icon: <Facebook />, link: "www.facebook.com/" },
    { icon: <Twitter />, link: "www.twitter.com/" },
    { icon: <LinkedIn />, link: "www.linkedin.com/" },
  ];

  const drawerCont = (
    <Box onClick={handleDrawerToggle}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        sx={{ py: 12, px: 6 }}
        className={styleClass.drawerContainer}
      >
        <Grid item>
          <IconButton
            onClose={handleDrawerToggle}
            sx={{
              position: "absolute",
              top: 25,
              right: 25,
              borderRadius: 0,
              color: "white.four",
              border: "2px solid",
              borderRadius: 0,
              width: 30,
              height: 30,
              "&:hover": { color: "#FFB82B" },
            }}
          >
            <Close />
          </IconButton>
        </Grid>
        <Grid item my={2}>
          <NavLink
            // onClick={handleOpenModal}
            className={styleClass.reqQuoteBtnDrawer}
          >
            request quote
          </NavLink>
        </Grid>
        {menuItems.map((item) => (
          <Grid item key={item.name} className={styleClass.drawerItemsCont}>
            <NavLink
              to={item.link}
              className={
                location.pathname === item.link
                  ? `${styleClass.indDrawerItem} ${styleClass.indDrawerItemActive}`
                  : styleClass.indDrawerItem
              }
            >
              {item.name}
            </NavLink>
          </Grid>
        ))}
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mt: 6,
            gap: 2,
          }}
        >
          {socialItems.map((item) => (
            <NavLink to={item.link} className={styleClass.indSocialIcon}>
              {item.icon}
            </NavLink>
          ))}
        </Grid>
      </Grid>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar sx={{ background: "#09124240" }}>
        <CssBaseline />
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems={{ xs: "center", md: "stretch" }}
          >
            <Grid item xs={4} md={2}>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Grid className={styleClass.logoContainer}>
                  <TruckLogo
                    width="19%"
                    fill="#FFB82B"
                    height="auto"
                    length="auto"
                  />
                  <Typography variant="h5" className={styleClass.logoText}>
                    MoveLog
                  </Typography>
                </Grid>
              </NavLink>
            </Grid>
            <Grid item md={8} display={{ xs: "none", md: "flex" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                py={3}
                spacing={4}
                height="100%"
              >
                {menuItems.map((item) => (
                  <Grid item key={item.name}>
                    <NavLink
                      exact
                      to={item.link}
                      className={
                        location.pathname === item.link
                          ? `${styleClass.indMenuItem} ${styleClass.indMenuItemActive}`
                          : styleClass.indMenuItem
                      }
                    >
                      {item.name}
                    </NavLink>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              md={2}
              display={{ xs: "none", md: "flex" }}
              className={styleClass.reqQuoteContainer}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <NavLink to="/" className={styleClass.reqQuoteText}>
                  request quote
                </NavLink>
              </Grid>
            </Grid>

            <Grid item xs={2} display={{ xs: "flex", md: "none" }}>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              display: { xs: "flex", md: "none" },
              width: "60%",
              background: "#091242",
            },
          }}
        >
          {drawerCont}
        </Drawer>
      </Box>
    </>
  );
};

export default MainNavbar;
