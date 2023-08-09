// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";

export const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    gap: 4,
  },
  logoText: {
    color: myTheme.palette.white.five,
    fontWeight: "medium",
    fontFamily: "Rubik",
    letterSpacing: 1,
  },
  menuItemsContainer: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 0",
    gap: 22,
  },
  indMenuItem: {
    fontFamily: "Rubik",
    fontWeight: "medium",
    textTransform: "capitalize",
    color: myTheme.palette.white.five,
    textDecoration: "none",
    "&:hover": { color: myTheme.palette.yellow.two },
  },
  indMenuItemActive: {
    color: myTheme.palette.yellow.two,
    fontWeight: "bold",
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "30px",
  },
  reqQuoteContainer: {
    backgroundColor: myTheme.palette.white.five,
    cursor: "pointer",
  },
  reqQuoteText: {
    color: myTheme.palette.black.three,
    textDecoration: "none",
    textTransform: "capitalize",
    fontWeight: "medium",
  },
  drawerContainer: {
    textTransform: "capitalize",
    textAlign: "center",
  },
  reqQuoteBtnDrawer: {
    background: `linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)`,
    borderRadius: 0,
    padding: "1em 1.5em",
    color: myTheme.palette.black.three,
    fontWeight: "medium",
    textDecoration: "none",
    textTransform: "capitalize",
    "&:hover": { background: myTheme.palette.white.five },
  },
  drawerItemsCont: {
    padding: "1.2em 0",
    color: myTheme.palette.white.five,
    borderBottom: "2px solid",
    fontWeight: "medium",
  },
  indDrawerItem: {
    fontFamily: "Rubik",
    fontWeight: "medium",
    textTransform: "capitalize",
    color: myTheme.palette.white.five,
    textDecoration: "none",
    "&:hover": { color: myTheme.palette.yellow.two },
  },
  indDrawerItemActive: {
    fontWeight: "bold",
    color: myTheme.palette.yellow.two,
  },
  socialIconCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1em",
    gap: 15,
  },
  indSocialIcon: {
    color: myTheme.palette.white.five,
    "&:hover": { color: myTheme.palette.yellow.two },
  },
}));
