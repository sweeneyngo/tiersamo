import React, { useState } from "react";
import Panels from "../../components/Panels/Panels";
import OptionsForm from "../../components/OptionsForm/OptionsForm";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";

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
const message = `Testing message`;

const Home = (props) => {
  const cfx = useStyles();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const handleModal = (id) => {
    setIndex(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className={cfx.root}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={cfx.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={cfx.paper}>
              <h2 id="transition-modal-title">Background Color</h2>
              <h2 id="transition-modal-title2">Label</h2>
              <h2 id="transition-modal-button1">Delete</h2>
              <h2 id="transition-modal-button1">Clear</h2>
              <h2 id="transition-modal-button1">Add Row Above</h2>
              <h2 id="transition-modal-button1">Add Row Below</h2>
              <p id="transition-modal-description">{index}</p>
              <OptionsForm />
            </div>
          </Fade>
        </Modal>
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
          <Panels handleModal={handleModal} />
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Home;
