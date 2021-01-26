import React, { useState } from "react";
import Entries from "../Entries/Entries";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, IconButton } from "@material-ui/core";

import { Timelapse } from "@material-ui/icons";

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
    width: "100%",
    height: "100%",
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: (props) => props.color,
  },
  rankText: {
    fontFamily: "Chakra Petch",
    fontSize: "1.5rem",
  },
  layout: {
    width: "100px",
    padding: "0 10px 0 0",
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
  },
}));

const Panel = (props) => {
  const cfx = useStyles(props);
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <Paper className={cfx.paper}>
      <Grid container wrap="nowrap">
        <div className={cfx.layout}>
          <Paper className={cfx.rank}>
            <Typography className={cfx.rankText}>{props.name}</Typography>
          </Paper>
        </div>

        <Entries />
        <div className={cfx.options}>
          <IconButton aria-label="delete" onClick={() => props.handleModal(props.id)}>
            <Timelapse className={cfx.icon} />
          </IconButton>
        </div>
      </Grid>
    </Paper>
  );
};

export default Panel;
