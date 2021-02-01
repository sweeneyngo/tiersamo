import React from "react";
import Panel from "../Panel/Panel";
import Pool from "../Pool/Pool";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import EntriesContext from "../../context/EntriesContext/EntriesContext";

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
    <EntriesContext.Consumer>
      {(context) => (
        <Grid container direction="column">
          {context.data.map((item, key) => (
            <Grid item className={cfx.layout}>
              <Panel
                id={item.id}
                key={item.key}
                name={item.name}
                color={item.color}
                pool={item.pool}
                onChange={context.onChange}
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
      )}
    </EntriesContext.Consumer>
  );
};

export default Panels;
