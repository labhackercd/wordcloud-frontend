import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { COLORS } from "./config/config_constants";
import "./App.css";

import InitialPage from "./containers/InitialPage"; 

import { ptBR } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: COLORS.mainColor
      }
    }
  },
  ptBR
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <InitialPage></InitialPage>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
