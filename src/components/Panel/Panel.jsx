import React from "react";
import Entries from "../Entries/Entries";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, IconButton } from "@material-ui/core";

import { Timelapse } from "@material-ui/icons";

import EntriesContext from "../../context/EntriesContext/EntriesContext";
const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    width: "100%",
    margin: `${theme.spacing(0)}px auto`,
    padding: theme.spacing(1),
    backgroundColor: "#1a1a1a",
    border: "1px solid #111",
  },
  rank: {
    width: "120px",
    height: "100%",
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: (props) => props.color,
  },
  rankText: {
    fontFamily: "Chakra Petch",
    fontSize: "1.25rem",
    wordWrap: "break-word",
  },
  options: {
    height: "75px",
    padding: theme.spacing(3, 0),
    textAlign: "center",
    boxShadow: "none",
    display: "flex",
    justify: "center",
    alignItems: "center",
  },
  icon: {
    fontFamily: "Chakra Petch",
    fontSize: "2rem",
    color: "#444",
    "&:hover": {
      color: "#f5af19",
    },
    "&:active": {
      color: "#FFFFF0",
    },
  },
  dev: {
    color: "white",
    fontFamily: "Chakra Petch",
    fontSize: "10px",
  },
  center: { display: "flex", justify: "center", alignItems: "center" },
}));

const Panel = (props) => {
  const cfx = useStyles(props);

  return (
    <EntriesContext.Consumer>
      {(context) => (
        <Paper className={cfx.paper}>
          <Grid container wrap="nowrap" className={cfx.center}>
            <div>
              <Paper className={cfx.rank}>
                <Typography className={cfx.rankText}>{props.name}</Typography>
              </Paper>
            </div>

            <Entries id={props.id} pool={props.pool} />

            {/* <Typography className={cfx.dev}>
              {JSON.stringify(props.pool)}
            </Typography> */}

            <div className={cfx.options}>
              <IconButton
                className={cfx.iconButton}
                onClick={() => context.onModal(props.id)}
              >
                <Timelapse className={cfx.icon} />
              </IconButton>
            </div>
          </Grid>
        </Paper>
      )}
    </EntriesContext.Consumer>
  );
};

export default Panel;
