import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import OptionsForm from "../../OptionsForm/OptionsForm";

import EntriesContext from "../../../context/EntriesContext/EntriesContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
}));

// props.index

const GFXModal = (props) => {
  const cfx = useStyles();

  return (
    <EntriesContext.Consumer>
      {(context) => (
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className={cfx.modal}
          open={context.open}
          onClose={context.onClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={context.open}>
            <OptionsForm />
          </Fade>
        </Modal>
      )}
    </EntriesContext.Consumer>
  );
};

export default GFXModal;
