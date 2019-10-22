import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@material-ui/core";
import theme from "./style/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider  theme={theme}>
    <SnackbarProvider maxSnack={3}>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </ThemeProvider>
  );
};

export default App;
