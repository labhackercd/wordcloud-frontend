import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { COLORS } from "./config/config_constants";
import "./App.css";
import PageDrawer from "./containers/PageDrawer"; 
import WordCloud from './containers/WordCloud'

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
      <PageDrawer>
        <Router>
          <Switch>
            <Route exact path="/">
              <WordCloud></WordCloud>
            </Route>
          </Switch>
        </Router>
      </PageDrawer>
    </ThemeProvider>
  );
}

export default App;
