import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import OptionsForm from "../OptionsForm/OptionsForm";

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
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className={cfx.modal}
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <OptionsForm
          onErase={props.onErase}
          onClear={props.onClear}
          onAdd={props.onAdd}
        />
      </Fade>
    </Modal>
  );
};

export default GFXModal;
