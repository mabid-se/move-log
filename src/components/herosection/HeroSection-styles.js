// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  bgOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.5,
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
    padding: "0 10px",
  },
  textOneContent: {
    textTransform: "capitalize",
    color: myTheme.palette.white.four,
    fontWeight: "regular",
    fontFamily: "Rubik",
  },
  textTwoContent: {
    textTransform: "capitalize",
    color: myTheme.palette.white.four,
    fontWeight: "bold",
    fontFamily: "Rubik",
  },
  textThreeContent: {
    display: { xs: "none", md: "block" },
    color: myTheme.palette.white.four,
    fontWeight: "medium",
    fontFamily: "Krub",
    textAlign: "justify",
  },
}));
