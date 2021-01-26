import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

import { Grid } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pool: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ghost: {
    opacity: 0.25,
  },
  image: {
    width: "75px",
    height: "75px",
  },
}));

const Pool = (props) => {
  const cfx = useStyles();
  const [state, setState] = useState([
    { id: 1, src: "./images/icon_oniwaka03.png", name: "oniwaka3" },
    { id: 2, src: "./images/icon_shuten01.png", name: "shuten1" },
    { id: 3, src: "./images/icon_oniwaka03.png", name: "oniwaka3" },
    { id: 4, src: "./images/icon_shuten01.png", name: "shuten1" },
    { id: 5, src: "./images/icon_oniwaka03.png", name: "oniwaka3" },
    { id: 6, src: "./images/icon_oniwaka03.png", name: "oniwaka3" },
  ]);

  return (
    <ReactSortable
      group="draggable"
      pull="true"
      put="true"
      animation={100}
      delayOnTouchStart={true}
      delay={2}
      list={state}
      ghostClass={cfx.ghost}
      setList={setState}
      className={cfx.pool}
      emptyInsertThreshold={5}
    >
      {state.map((item) => (
        <Grid item>
          <div>
            <img
              key={item.id}
              src={item.src}
              alt={item.name}
              className={cfx.image}
            ></img>
          </div>
        </Grid>
      ))}
    </ReactSortable>
  );
};

export default Pool;
