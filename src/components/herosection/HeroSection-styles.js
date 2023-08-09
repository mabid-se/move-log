// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  bgOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "inherit !important",
    opacity: 1,
  },
  textOneGrid: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: 4,
      height: "100%",
      backgroundImage: myTheme.palette.gradient.primary,
    },
    background: "#041c3780",
    padding: "0 15px",
  },
  textOneContent: {
    textTransform: "capitalize",
    color: myTheme.palette.white.five,
    fontWeight: "regular",
    fontFamily: "Rubik",
  },
  textTwoContent: {
    textTransform: "capitalize",
    color: myTheme.palette.white.five,
    fontWeight: "bold",
    fontFamily: "Rubik",
  },
  textThreeContent: {
    display: { xs: "none", md: "block" },
    color: myTheme.palette.white.five,
    fontWeight: "medium",
    fontFamily: "Krub",
    textAlign: "justify",
  },
}));
