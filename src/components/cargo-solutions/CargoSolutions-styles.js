// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";

export const useStyles = makeStyles((theme) => ({
  // mainContainer: {
  //   flexDirection: "row",
  //   // justifyContent: "space-between",
  //   // alignItems: "flex-start",
  // },
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
    background: "#E8E8E8",
    padding: "0 15px",
  },
  textOneContent: {
    textTransform: "capitalize",
    color: myTheme.palette.blue.three,
    fontWeight: "regular",
    fontFamily: "Rubik",
  },
  textTwoContent: {
    marginTop: `${myTheme.spacing(2)} !important`,
    textTransform: "capitalize",
    color: myTheme.palette.blue.three,
    fontWeight: "bold !important",
    fontFamily: "Rubik",
  },
  leftSideContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listItemInnerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  listItemIcoContainer: {
    borderRight: `2px solid ${myTheme.palette.white.one}`,
  },
  listItemHeadText: {
    textTransform: "capitalize",
    fontWeight: "medium",
    color: myTheme.palette.blue.three,
  },
  listItemHeadText: {
    marginTop: myTheme.spacing(2),
    textTransform: "capitalize",
    fontWeight: "medium",
    color: myTheme.palette.blue.three,
  },
  listItemDescText: {
    marginTop: `${myTheme.spacing(2)} !important`,
    textTransform: "capitalize",
    color: myTheme.palette.black.five,
    fontWeight: "medium !important",
  },
}));
