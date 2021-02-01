import React from "react";
import { ReactSortable } from "react-sortablejs";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import EntriesContext from "../../context/EntriesContext/EntriesContext";

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
  return (
    <EntriesContext.Consumer>
      {(context) => (
        <ReactSortable
          group="draggable"
          pull="true"
          put="true"
          animation={100}
          delayOnTouchStart={true}
          delay={2}
          list={context.pool}
          ghostClass={cfx.ghost}
          setList={(newList) => context.setPool(newList)}
          className={cfx.pool}
          emptyInsertThreshold={5}
        >
          {context.pool.map((item) => (
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
      )}
    </EntriesContext.Consumer>
  );
};

export default Pool;
