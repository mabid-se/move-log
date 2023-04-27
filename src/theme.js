import { createTheme } from "@mui/material";

export const myTheme = createTheme({
  palette: {
    black: { 400: "#A9A9A9", 600: "#4D4D4D", 800: "#272727", 900: "#000000" },
    white: {
      400: "#D9D9D9",
      600: "#CCCCCC",
      700: "#F3F3F3",
      800: "#F4F4F4",
      900: "#FFFFFF",
    },
    yellow: { 400: "#FFDA56", 600: "#F6B426", 800: "#FFB629", 900: "#FFB82B" },
    blue: { 600: "#1C1F35", 900: "#091242" },
    blueTrans: { 400: "#041c3780", 600: "#09124240" },
    grey: { 400: "#666C89", 600: "#e8e8e880", 800: "#ffffff33" },
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
