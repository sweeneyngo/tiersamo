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
  return (
    <Grid container direction="column" className={cfx.test}>
      {props.entries.map((item, key) => (
        <Grid item className={cfx.layout}>
          <Panel
            id={item.id}
            key={item.key}
            name={item.name}
            color={item.color}
            handleModal={props.handleModal}
            pool={item.pool}
            clear={item.clear}
            handlerChange={props.handlerChange}
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
