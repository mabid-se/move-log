// ---| React Imports |---
import React from "react";

// ---| MUI Imports |---
import { Box, Container, Grid, Typography } from "@mui/material";

// ---| Project Imports |---
import { useStyles } from "./CargoSolutions-styles";
import { servicesListData } from "../../data/services-list";

const CargoSolutions = () => {
  const styleClasses = useStyles();

  return (
    <>
      <Box py={10}>
        <Container>
          <Grid
            container
            direction="row"
            // className={styleClasses.mainContainer}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <div className={styleClasses.textOneGrid}>
                <Typography
                  variant="h6"
                  className={styleClasses.textOneContent}
                >
                  what we do
                </Typography>
              </div>
              <Typography variant="h4" className={styleClasses.textTwoContent}>
                safe & reliable
                <br />
                cargo solutions
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container className={styleClasses.leftSideContainer}>
                {servicesListData.map((item) => (
                  <Grid
                    xs={12}
                    sm={6}
                    key={item.id}
                    sx={
                      item.id === 1
                        ? { mt: { xs: 6, md: 0 } }
                        : item.id === 2
                        ? { mt: { xs: 6, md: 0 } }
                        : { mt: 6 }
                    }
                  >
                    <Grid
                      container
                      className={styleClasses.listItemInnerContainer}
                    >
                      <Grid
                        item
                        xs={3}
                        md={4}
                        className={styleClasses.listItemIcoContainer}
                      >
                        {item.icon}
                      </Grid>
                      <Grid item xs={9} md={8} pl={3}>
                        <Typography
                          variant="h6"
                          className={styleClasses.listItemHeadText}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          className={styleClasses.listItemDescText}
                        >
                          {item.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CargoSolutions;
