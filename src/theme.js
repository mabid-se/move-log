import { createTheme } from "@mui/material";

export const myTheme = createTheme({
  palette: {
    black: {
      one: "#A9A9A9",
      two: "#4D4D4D",
      three: "#272727",
      four: "#000000",
    },
    white: {
      one: "#D9D9D9",
      two: "#CCCCCC",
      three: "#F3F3F3",
      four: "#FFFFFF",
    },
    yellow: { one: "#F6B426", two: "#FFB82B" },
    blue: { one: "#091242" },
    grey: {
      one: "#09124240", //#ffffff33
    },
  },

  typography: {
    fontFamily: ["Rubik", "Krub", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightBolder: 900,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          body1: "p",
          body2: "span",
        },
      },
    },
    MuiButton: {
      defaultProps: { sx: { py: 1, px: 2 } },
    },
    MuiPaper: {
      styleOverrides: {
        root: { background: { light: "", dark: "" } },
        defaultProps: { elevation: 6 },
      },
    },
    styleOverrides: {
      MuiInput: {
        input: { "&::placeholder": { color: "white" }, color: "white" },
      },
    },
  },
});
