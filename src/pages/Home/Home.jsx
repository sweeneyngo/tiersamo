import React, { useState } from "react";
import Panels from "../../components/Panels/Panels";
import GFXModal from "../../components/GFXModal/GFXModal";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import Panel from "../../components/Panel/Panel";

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
  const [clear, setClear] = useState(-1);

  const handleModal = (id) => {
    setIndex(id);
    console.log(id);
    console.log("Index:" + index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleErase = () => {
    alert("Erasing: " + index);
    setEntries(entries.filter((entry) => entry.id !== index));
    setOpen(false);
  };

  const handleAdd = (pos) => {
    alert("Add!" + pos);
    setOpen(false);
  };

  const handleClear = () => {
    alert("Clear");
    setEntries(
      entries.map((entry) =>
        entry.id === index ? { ...entry, clear: true } : entry
      )
    );
  };

  const history = { previous: -1, pastEntries: [] };
  const handlerChange = ({ pool, id }) => {
    if (id === history.previous) return;
    history.pastEntries.push(history.previous);
    history.previous = id;
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, pool: pool } : entry
      )
    );
    console.log("Pool: " + JSON.stringify(pool));
    console.log("ID: " + id);
    console.log(entries.map((entry) => entry.pool));
  };

  const [entries, setEntries] = useState([
    {
      id: 1,
      key: 1,
      name: "SS",
      color: "#c07fc0",
      clear: false,
      pool: [
        {
          id: 1,
          src: "./images/icon_oniwaka03.png",
          name: "oniwaka3",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: 2,
      key: 2,
      name: "S",
      color: "#80ff80",
      clear: false,
      pool: [
        {
          id: 1,
          src: "./images/icon_oniwaka03.png",
          name: "oniwaka3",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: 3,
      key: 3,
      name: "A",
      color: "#c1fc83",
      clear: false,
      pool: [
        {
          id: 1,
          src: "./images/icon_oniwaka03.png",
          name: "oniwaka3",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: 4,
      key: 4,
      name: "B",
      color: "#ffff80",
      clear: false,
      pool: [
        {
          id: 1,
          src: "./images/icon_oniwaka03.png",
          name: "oniwaka3",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: 5,
      key: 5,
      name: "C",
      color: "#ffdf7e",
      clear: false,
      pool: [
        {
          id: 1,
          src: "./images/icon_oniwaka03.png",
          name: "oniwaka3",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: 6,
      key: 6,
      name: "D",
      color: "#ffbf7e",
      clear: false,
      pool: [
        {
          id: 1,
          src: "./images/icon_oniwaka03.png",
          name: "oniwaka3",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: 7,
      key: 7,
      name: "E",
      color: "#ff7f7f",
      clear: false,
      pool: [
        {
          id: 1,
          src: "./images/icon_oniwaka03.png",
          name: "oniwaka3",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
      ],
    },
    {
      id: 8,
      key: 8,
      name: "F",
      color: "#cfcfcf",
      clear: false,
      pool: [
        {
          id: 1,
          src: "./images/icon_oniwaka03.png",
          name: "oniwaka3",
          chosen: false,
          selected: false,
        },
        {
          id: 2,
          src: "./images/icon_shuten01.png",
          name: "shuten1",
          chosen: false,
          selected: false,
        },
      ],
    },
  ]);

  return (
    <React.Fragment>
      <div className={cfx.root}>
        <GFXModal
          open={open}
          onClose={handleClose}
          onErase={handleErase}
          onClear={handleClear}
          onAdd={handleAdd}
          index={index}
        />

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
          <Panels
            handleModal={handleModal}
            entries={entries}
            handlerChange={handlerChange}
          />
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Home;
