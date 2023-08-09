// ---| React Imports |---
import React from "react";

// ---| MUI Imports |---
import { Box, Container, Grid, Typography } from "@mui/material";

// ---| Project Imports |---
import { useStyles } from "./WhyUs-styles";
// import whyUsBg from "../../assets/images/why-us-about.png";
import { myTheme } from "../../theme";
import airNZ from "../../assets/images/air-new-zealnad.png";
import clientRec from "../../assets/images/client-receiving-package.png";

const WhyUs = () => {
  const styleClasses = useStyles();

  return (
    <div>
      <>
        <Box>
          <Grid container direction="column">
            <Grid item>
              <div className={styleClasses.upperbgContainer}>
                <div className={styleClasses.bgOverlay}></div>
              </div>
            </Grid>
            <Grid item sx={{ zIndex: 1, mt: "-5%" }}>
              <Container>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  //   px={{ lg: 8 }}
                  backgroundColor="#ffffff"
                >
                  <Grid
                    item
                    background
                    py={{ md: 6, lg: 8 }}
                    px={{ md: 6, lg: 8 }}
                  >
                    <Grid
                      container
                      direction={{ xs: "column-reverse", md: "row" }}
                      justifyContent="center"
                      alignItems="flex-start"
                    >
                      <Grid item xs={12} md={6} px={3}>
                        <Grid
                          container
                          direction="column"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid item className={styleClasses.textOneGrid}>
                            <Typography
                              variant="h6"
                              className={styleClasses.textOneContent}
                            >
                              why us
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="h4"
                              className={styleClasses.textTwoContent}
                            >
                              {
                                "We provide full range global logistics solution"
                              }
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body1"
                              mt={1}
                              className={styleClasses.descTextContent}
                            >
                              {
                                "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition."
                              }
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body1"
                              mt={1}
                              className={styleClasses.descTextContent}
                            >
                              {
                                'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."'
                              }
                            </Typography>
                          </Grid>
                          <Grid item>list item 1</Grid>
                          <Grid item>list item 1</Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        px={3}
                        position="relative"
                        height="470px"
                      >
                        <div className={styleClasses.rightCont}></div>
                        <div className={styleClasses.rightContUpImgCont}>
                          {/* <div className={styleClasses.rightContUpImgCont}> */}
                          <img
                            src={clientRec}
                            alt="client-receiving-package"
                            className={styleClasses.rightContUpImg}
                          />
                          {/* </div> */}
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item px={{ md: 6, lg: 8 }}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      borderTop={1}
                      borderBottom={1}
                    >
                      <Grid item xs={12} sm={6} borderRight={1}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Alias temporibus dicta quos dolore quia illum
                        vitae, commodi beatae veniam sed culpa aliquam earum!
                        Consequuntur nam animi totam odio quo ea!
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Alias temporibus dicta quos dolore quia illum
                        vitae, commodi beatae veniam sed culpa aliquam earum!
                        Consequuntur nam animi totam odio quo ea!
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </>
    </div>
  );
};

export default WhyUs;
