import React, { useState } from "react";
import Panel from "../Panel/Panel";
import Pool from "../Pool/Pool";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "70%",
    height: "100px",
    margin: `${theme.spacing(0)}px auto`,
    backgroundColor: "#1a1a1a",
    color: "white",
    border: "1px solid #111",
  },
  layout: {
    width: "100%",
  },
}));

const Panels = (props) => {
  const cfx = useStyles();
  const [entries, setEntries] = useState([
    { id: 1, key: 1, name: "SS", color: "#c07fc0" },
    { id: 2, key: 2, name: "S", color: "#80ff80" },
    { id: 3, key: 3, name: "A", color: "#c1fc83" },
    { id: 4, key: 4, name: "B", color: "#ffff80" },
    { id: 5, key: 5, name: "C", color: "#ffdf7e" },
    { id: 6, key: 6, name: "D", color: "#ffbf7e" },
    { id: 7, key: 7, name: "E", color: "#ff7f7f" },
    { id: 8, key: 8, name: "F", color: "#cfcfcf" },
  ]);
  return (
    <Grid container direction="column" className={cfx.test}>
      {entries.map((item) => (
        <Grid item className={cfx.layout}>
          <Panel
            id={item.id}
            key={item.key}
            name={item.name}
            color={item.color}
            handleModal={props.handleModal}
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Paper className={cfx.paper}>
          <Grid container wrap="nowrap">
            <Grid item className={cfx.layout}>
              <Pool />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Panels;
