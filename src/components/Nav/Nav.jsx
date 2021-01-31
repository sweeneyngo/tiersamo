import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Tabs, Tab } from "@material-ui/core";

// colors:
// #360033 --> #0b8973
// #0f2027 --> #203a43 --> #2c5364

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#f5af19",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    fontFamily: "Chakra Petch",
    textTransform: "lowercase",
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
    "&:hover": {
      color: "#eee",
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  nav: {
    backgroundColor: "#121212",
  },
}));

const Nav = (props) => {
  const cfx = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => setValue(newValue);

  return (
    <Grid container spacing={16} className={cfx.nav}>
      <StyledTabs value={value} onChange={handleChange} aria-label="nav-tabs">
        <StyledTab label="Home">
          <NavLink to="/">Home</NavLink>
        </StyledTab>
        <StyledTab label="About">
          <NavLink to="/about">About</NavLink>
        </StyledTab>
        <StyledTab label="User">
          <NavLink to="/user">Home</NavLink>
        </StyledTab>
      </StyledTabs>
    </Grid>
  );
};

export default Nav;
