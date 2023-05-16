// ---| React Imports |---
import React, { useEffect, useRef, useState } from "react";

// ---| MUI Imports |---
import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";

// ---| Porject Imports |---
import { useStyles } from "./MainNavbar-styles";
import { ReactComponent as TruckLogo } from "../../assets/images/truck.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as IGIcon } from "../../assets/icons/Instagram.svg";
import { ReactComponent as FBIcon } from "../../assets/icons/Facebook.svg";
import { ReactComponent as TWIcon } from "../../assets/icons/Twitter.svg";
import { ReactComponent as INIcon } from "../../assets/icons/Linkdin.svg";

const MainNavbar = () => {
  const styleClasses = useStyles();

  const menuItems = ["home", "about", "pages", "project", "contact"];
  const socialItems = ["ig", "fb", "tw", "in"];
  const [scrolled, setScrolled] = useState(false);
  const appBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 130;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const appBarElement = appBarRef.current;
    if (appBarElement) {
      if (scrolled) {
        appBarElement.style.backgroundColor = "rgba(255, 255, 255, 1)";
        appBarElement.style.top = "0";
      } else {
        appBarElement.style.backgroundColor = "transparent";
        appBarElement.style.top = "80px";
      }
    }
  }, [scrolled]);

  return (
    <>
      <AppBar
        ref={appBarRef}
        className={`${styleClasses.appBar} ${
          scrolled ? styleClasses.appBarScrolled : ""
        }`}
      >
        <Container>
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: { md: "15%" },
                  gap: 1,
                }}
              >
                <TruckLogo fill="" stroke="" width="17%" height="auto" />
                <Typography variant="h5" fontWeight="bold" fontFamily="Rubik">
                  Move log
                </Typography>
              </Grid>
              <Grid item sx={{ width: { md: "60%" } }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Grid
                    item
                    sx={{
                      width: { md: "31%" },
                      display: "flex",
                      displayDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Grid
                      sx={{
                        width: { md: "50px" },
                        height: { md: "50px" },
                        background: "#111C55",
                        borderColor: "#273270",
                        borderRadius: "50%",
                        // p: "13px", // p: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center", // textAlign: "center",
                      }}
                    >
                      <ClockIcon width="100%" height="auto" />
                    </Grid>
                    <Grid sx={{ width: { md: "80%" } }}>
                      <Typography
                        variant="body2"
                        className={styleClasses.moreInfoText}
                      >
                        mon - sat 9.00 - 18.00
                        <br /> sunday closed
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    sx={{
                      width: { md: "31%" },
                      display: "flex",
                      displayDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Grid sx={{ width: { md: "20%" } }}>
                      <MailIcon fill="" stroke="" width="100%" />
                    </Grid>
                    <Grid sx={{ width: { md: "80%" } }}>
                      <Typography
                        variant="body2"
                        className={styleClasses.moreInfoText}
                      >
                        email
                        <br /> info@movelog.com
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    sx={{
                      width: { md: "31%" },
                      display: "flex",
                      displayDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Grid sx={{ width: { md: "20%" } }}>
                      <PhoneIcon fill="" stroke="" width="100%" />
                    </Grid>
                    <Grid sx={{ width: { md: "80%" } }}>
                      <Typography
                        variant="body2"
                        className={styleClasses.moreInfoText}
                      >
                        call us
                        <br /> (00) 112 365 489
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                item
                sx={{
                  width: { md: "50%" },
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {menuItems.map((item) => (
                  <Typography className={styleClasses.navItem}>
                    <a>{item}</a>
                  </Typography>
                ))}
              </Grid>
              <Grid
                item
                sx={{
                  width: { md: "30%" },
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Grid
                  sx={{
                    width: { md: "40%" },
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <a>
                    <IGIcon fill="" stroke="" width="100%" height="auto" />
                  </a>
                  <a>
                    <FBIcon fill="" stroke="" width="100%" height="auto" />
                  </a>
                  <a>
                    <TWIcon fill="" stroke="" width="100%" height="auto" />
                  </a>
                  <a>
                    <INIcon fill="" stroke="" width="100%" height="auto" />
                  </a>
                </Grid>
                <Grid
                  sx={{
                    width: { md: "40%" },
                    height: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button>request quote</button>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default MainNavbar;
