// ---| React Imports |---
import React from "react";

// ---| MUI Imports |---
import { Box, Container, Grid, Typography } from "@mui/material";
import { ArrowForward, Instagram } from "@mui/icons-material";

// ---| React Router Dom Imports |---
import { NavLink } from "react-router-dom";

// ---| Project Imports |---
import { useStyles } from "./HeroSection-styles";
import backgroundImage from "../../assets/images/aerial-view-container-cargo-ship-sea.png";
import { myTheme } from "../../theme";
import Button from "../button/Button";

const HeroSection = () => {
  const styleClasses = useStyles();
  return (
    <Box
      className={styleClasses.mainContainer}
      sx={{ height: "100vh", backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={styleClasses.bgOverlay}
        style={
          {
            // backgroundColor: (props) => props.overlayColor,
          }
        }
      ></div>

      <Container sx={{ zIndex: 1 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          width={{ xs: "90%", sm: "80%", md: "60%", lg: "50%" }}
          px={{ xs: 1, md: 2, lg: 0 }}
        >
          <Grid item className={styleClasses.textOneGrid}>
            <Typography
              variant="subtitle1"
              className={styleClasses.textOneContent}
            >
              {"logistics & supply chain solutions"}
            </Typography>
          </Grid>
          <Grid item mt={1}>
            <Typography variant="h2" className={styleClasses.textTwoContent}>
              {"Your Gateway to any Destination in the World"}
            </Typography>
          </Grid>
          <Grid item width="85%" display={{ xs: "none", sm: "flex" }}>
            <Typography
              variant="body1"
              className={styleClasses.textThreeContent}
            >
              {
                "In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus."
              }
            </Typography>
          </Grid>
          <Grid item mt={{ xs: 2, md: 3 }}>
            <Button variant="yellow" btnLink="/about" btnText="Explore More" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
