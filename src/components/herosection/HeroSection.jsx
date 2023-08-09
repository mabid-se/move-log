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

const HeroSection = ({
  contHeight,
  bgImg,
  bgOverlay,
  highlightedText,
  headingText,
  descriptionText,
  btnText,
  btnLink,
}) => {
  const styles = useStyles();
  return (
    <Box
      className={styles.mainContainer}
      style={{ height: contHeight, backgroundImage: `url(${bgImg})` }}
    >
      {bgOverlay && (
        <div
          className={styles.bgOverlay}
          style={{ background: bgOverlay }}
        ></div>
      )}

      <Container sx={{ zIndex: 1 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          width={{ xs: "90%", sm: "80%", md: "60%", lg: "50%" }}
          px={{ xs: 1, md: 2, lg: 0 }}
        >
          <Grid item className={styles.textOneGrid}>
            <Typography variant="subtitle1" className={styles.textOneContent}>
              {highlightedText}
            </Typography>
          </Grid>
          <Grid item mt={1}>
            <Typography variant="h3" className={styles.textTwoContent}>
              {headingText}
            </Typography>
          </Grid>
          <Grid item mt={2} width="85%" display={{ xs: "none", sm: "flex" }}>
            <Typography variant="body1" className={styles.textThreeContent}>
              {descriptionText && <>{descriptionText}</>}
            </Typography>
          </Grid>
          {btnText && (
            <Grid item mt={{ xs: 2, md: 3 }}>
              <Button variant="yellow" btnLink={btnLink} btnText={btnText} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
