import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

import { Grid, Paper } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ghost: {
    opacity: 0.25,
  },
  image: {
    width: "75px",
    height: "75px",
    margin: "0 2px 0 0",
  },
  flexbox: {
    display: "flex",
    alignContent: "flex-start",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },
  flexEntries: {
    width: "100%",
    flexGrow: 1,

  },
}));

const Entries = (props) => {
  const cfx = useStyles();
  const [state, setState] = useState([
    { id: 1, src: "./images/icon_oniwaka03.png", name: "oniwaka3" },
    { id: 2, src: "./images/icon_shuten01.png", name: "shuten1" },
  ]);

  return (
    <div className={cfx.flexEntries}>
      <ReactSortable
        group="draggable"
        put="true"
        pull="true"
        animation={100}
        delayOnTouchStart={true}
        delay={2}
        list={state}
        ghostClass={cfx.ghost}
        className={cfx.flexbox}
        setList={setState}
        emptyInsertThreshold={5}
      >
        {state.map((item) => (
          <Grid item>
            <img
              key={item.id}
              src={item.src}
              alt={item.name}
              className={cfx.image}
            ></img>
          </Grid>
        ))}
      </ReactSortable>
    </div>
  );
};

export default Entries;
