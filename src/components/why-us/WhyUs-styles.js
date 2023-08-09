// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
import { myTheme } from "../../theme";
import whyUsBg from "../../assets/images/why-us-about.png";
import airNz from "../../assets/images/air-new-zealnad.png";
import clientRecPack from "../../assets/images/client-receiving-package.png";

export const useStyles = makeStyles((theme) => ({
  // mainContainer: {
  //   flexDirection: "row",
  //   // justifyContent: "space-between",
  //   // alignItems: "flex-start",
  // },
  upperbgContainer: {
    position: "relative",
    height: "48vh",
    backgroundImage: `url(${whyUsBg})`,
  },
  bgOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "inherit !important",
    opacity: 1,
    background: "linear-gradient(0deg, #091242 0%, rgba(9, 18, 66, 0.00) 100%)",
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
    background: "#e8e8e880",
    padding: "0 15px",
  },
  textOneContent: {
    textTransform: "capitalize",
    color: myTheme.palette.blue.three,
    fontWeight: "medium !important",
    fontFamily: "Rubik",
  },
  textTwoContent: {
    marginTop: `${myTheme.spacing(2)} !important`,
    textTransform: "capitalize",
    color: myTheme.palette.blue.three,
    fontWeight: "bold !important",
    fontFamily: "Rubik",
  },
  descTextContent: {
    textTransform: "capitalize",
    color: myTheme.palette.black.five,
    fontWeight: "medium !important",
  },
  rightCont: {
    width: "450px",
    height: "395px",
    position: "relative",
    backgroundImage: `url(${airNz})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
  },
  rightContUpImgCont: {
    background: myTheme.palette.white.five,
    position: "absolute",
    padding: `${myTheme.spacing(3)}`,
    bottom: "0",
    left: "-12%",
  },

  rightContUpImg: {
    width: "270px",
    height: "210px",
  },
}));
