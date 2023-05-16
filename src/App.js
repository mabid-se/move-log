import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import "./App.css";
import RoutesProvider from "./routes/RoutesProvides";
import { myTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(createTheme(myTheme))}>
      <RoutesProvider />
    </ThemeProvider>
  );
}

export default App;
