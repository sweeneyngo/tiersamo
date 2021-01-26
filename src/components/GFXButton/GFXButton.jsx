import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const GFXButton = withStyles({
  root: {
    fontSize: 12,
    padding: "1rem 5rem",
    border: "1px solid",
    backgroundColor: "#1F1B24",
    borderColor: "#f5af19",
    fontFamily: "Futura",
    color: "#f5af19",
    borderRadius: "10rem",
    "&:hover": {
      backgroundColor: "#f5af19",
      color: "white",
      borderColor: "#f5af19",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
    "&:disabled": {
      borderColor: "#cdcdcd",
      color: "#454545",
    },
  },
})(Button);

export default GFXButton;
