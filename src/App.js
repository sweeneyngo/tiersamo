import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import User from "./pages/User/User";
import NotFound from "./pages/NotFound/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#121212",
    },
    primary: {
      main: "#f5af19",
    },
  },
  typography: {
    fontFamily: [
      "Chakra Petch",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 12,
    allVariants: {
      color: "white",
    },
  },
});

const App = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
      </MuiThemeProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route default component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
