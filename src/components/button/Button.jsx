// ---| React Imports |---
import React from "react";

// ---| React Router Dom Imports |---
import { NavLink } from "react-router-dom";

// ---| MUI Imports |---
import { Grid } from "@mui/material";

// ---| Project Imports |---
import { useStyles } from "./Button-styles";
import { myTheme } from "../../theme";

const Button = ({
  variant,
  btnLink,
  onBtnClick,
  btnStartIco,
  btnText,
  btnEndIco,
}) => {
  const styleClasses = useStyles();
  return (
    <NavLink
      to={btnLink}
      className={styleClasses.btnText}
      style={{
        color:
          variant === "yellow"
            ? myTheme.palette.black.three
            : myTheme.palette.white.one,
      }}
      onClick={onBtnClick}
    >
      <Grid
        sx={{
          background:
            variant === "yellow"
              ? `linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)`
              : myTheme.palette.blue.two,
          "&:hover": {
            background:
              variant === "yellow"
                ? myTheme.palette.white.four
                : myTheme.palette.blue.one,
          },
        }}
        className={styleClasses.btnContainer}
      >
        {btnStartIco && <>{btnStartIco}</>}
        <span>{btnText}</span>
        {btnEndIco && <>{btnEndIco}</>}
      </Grid>
    </NavLink>
  );
};

export default Button;
