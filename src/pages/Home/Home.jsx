import React from "react";
import Panels from "../../components/Panels/Panels";
import GFXModal from "../../components/GFXModal/GFXModal";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

import EntriesProvider from "../../provider/EntriesProvider/EntriesProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    height: "auto",
  },
  header: {
    padding: theme.spacing(5, 3, 0, 3),
  },
  hpaper: {
    width: "80%",
    height: "200px",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: "#121212",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#1a1a1a",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const header = `tiersamo`;

const Home = (props) => {
  const cfx = useStyles();

  return (
    <EntriesProvider>
      <React.Fragment>
        <div className={cfx.root}>
          <GFXModal />

          <Grid container spacing={3}>
            <Grid container className={cfx.header} spacing={2}>
              <Paper className={cfx.hpaper}>
                <Grid
                  container
                  wrap="nowrap"
                  spacing={2}
                  justify="center"
                  alignItems="center"
                >
                  <Typography className={cfx.text}>{header}</Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Panels />
          </Grid>
        </div>
      </React.Fragment>
    </EntriesProvider>
  );
};

export default Home;
