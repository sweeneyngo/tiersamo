import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  const [pool, setPool] = useState(props.pool);

  props.clear && setPool([]);

  return (
    <div className={cfx.flexEntries}>
      <ReactSortable
        group="draggable"
        put="true"
        pull="true"
        animation={100}
        delayOnTouchStart={true}
        delay={2}
        list={pool}
        ghostClass={cfx.ghost}
        className={cfx.flexbox}
        setList={setPool}
        onSort={() => props.handlerChange({ pool: pool, id: props.id })}
        emptyInsertThreshold={5}
      >
        {pool.map((item) => (
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
