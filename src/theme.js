import { createTheme } from "@mui/material";

export const myTheme = createTheme({
  palette: {
    black: {
      one: "#A9A9A9",
      two: "#4D4D4D",
      three: "#272727",
      four: "#000000",
      five: "#666C89",
    },
    white: {
      one: "#D9D9D9",
      two: "#CCCCCC",
      three: "#F3F3F3",
      // four: "#ebebeb",
      five: "#FFFFFF",
    },
    yellow: { one: "#F6B426", two: "#FFB82B" },
    blue: { one: "#1F2A69", two: "#091242", three: "#1C1F35" },
    grey: {
      one: "#09124240", //#ffffff33
    },
    gradient: {
      primary:
        "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
      blue: "linear-gradient(90deg, #032D5F 0%, rgba(9, 18, 66, 0.20) 100%)",
      blueTwo: "linear-gradient(0deg, #091242 0%, rgba(9, 18, 66, 0.00) 100%)",
    },
  },

  typography: {
    fontFamily: ["Rubik", "Krub", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    fontWeightExtraBold: 700,
    fontWeightBlack: 800,
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
