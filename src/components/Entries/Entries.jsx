import React from "react";
import { ReactSortable } from "react-sortablejs";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import EntriesContext from "../../context/EntriesContext/EntriesContext";

const useStyles = makeStyles((theme) => ({
  ghost: {
    opacity: 0.25,
  },
  image: {
    width: "75px",
    height: "75px",
    margin: "0 2px 0 10px",
    borderRadius: "10px",
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
    // backgroundColor: "red",
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
  iconDiv: {
    display: "flex",
  },
}));

const Entries = (props) => {
  const cfx = useStyles();

  return (
    <EntriesContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div className={cfx.flexEntries}>
            <ReactSortable
              group="draggable"
              put="true"
              pull="true"
              animation={100}
              delayOnTouchStart={true}
              delay={2}
              list={props.pool}
              ghostClass={cfx.ghost}
              className={cfx.flexbox}
              setList={(newList) => context.onChangePool(newList, props.id)}
              onSort={() =>
                context.onChange({ pool: props.pool, id: props.id })
              }
              emptyInsertThreshold={5}
            >
              {props.pool.map((item) => (
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
        </React.Fragment>
      )}
    </EntriesContext.Consumer>
  );
};

export default Entries;
