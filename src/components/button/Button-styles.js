// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";

export const useStyles = makeStyles((myTheme) => ({
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 13,
    borderRadius: 0,
    padding: "10px 18px",
  },
  btnText: {
    fontFamily: "Rubik",
    fontWeight: "medium",
    textDecoration: "none",
    textTransform: "capitalize",
    textDecoration: "none",
  },

  button: {
    display: "inline-block",
    textTransform: "uppercase",
    transition: "all 0.3s",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    "&:after": {
      content: "",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgoundColor: "#0cf",
      borderRadius: "10rem",
      zIndex: 2,
    },
    "&:after": {
      content: "",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "0%",
      height: "100%",
      backgoundColor: "#008fb3",
      transition: "all 0.3s",
      borderRadius: "10rem",
      zIndex: "-1",
    },
    "&:hover": { color: "#fff", "&:before": { width: "100%" } },
  },
}));
