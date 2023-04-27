import React from "react";
import MainNavbar from "../components/MainNavbar";
import MainFooter from "../components/MainFooter";
import { Typography } from "@mui/material";

const MoveLogLP = () => {
  return (
    <>
      <MainNavbar />
      <Typography variant="h1" fontFamily="Rubik">
        MoveLog - Logistics on the go
      </Typography>
      <Typography variant="h5" fontFamily="Krub">
        logistics on the go
      </Typography>
      <MainFooter />
    </>
  );
};

export default MoveLogLP;
