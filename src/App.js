import "./App.css";
import RoutesProvider from "./routes/RoutesProvides";
import { myTheme } from "./theme";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={responsiveFontSizes(createTheme(myTheme))}>
        <RoutesProvider />
      </ThemeProvider>
    </>
  );
}

export default App;
