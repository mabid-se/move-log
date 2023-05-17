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
}));
