import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Nav from "../Nav/Nav";

import Dashboard from "../../pages/Dashboard/Dashboard";
import About from "../../pages/About/About";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import User from "../../pages/User/User";
import NotFound from "../../pages/NotFound/NotFound";

import History from "../../utils/History/History";
// import GlobalContext from "../../context/GlobalContext/GlobalContext";
// import AuthCheck from "../../utils/AuthCheck/AuthCheck";

import AuthProvider from "../../provider/AuthProvider/AuthProvider";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import FirebaseAuth from "../../context/AuthContext/AuthContext";

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

const PrivateRoute = ({ component: Component, auth }) => (
  <Route
    render={(props) =>
      auth === true ? (
        <Component auth={auth} {...props} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

const Routes = () => {
  // const context = useContext(GlobalContext);
  const { token } = useContext(FirebaseAuth);
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
      </MuiThemeProvider>
      <BrowserRouter history={History}>
        <AuthProvider>
          <Nav />

          <Switch>
            <Route
              exact
              path="/"
              // render={(rProps) => (token === null ? <Home /> : <Dashboard />)}
              component={Dashboard}
            />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* <Route path="/user" component={User} exact /> */}
            {/* <Route path="/authcheck" component={AuthCheck} /> */}

            {/* <PrivateRoute
              path="/user"
              auth={context.authState}
              component={User}
            /> */}

            {/* <Route
              path="/callback"
              render={(props) => {
                context.handleAuth(props);
                return <Callback />;
              }}
            /> */}

            <Route default component={NotFound} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Routes;
