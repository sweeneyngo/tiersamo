import { withStyles } from "@material-ui/core/styles";
import { TextField } from "mui-rff";

const GFXField = withStyles({
  root: {
    "& label.MuiFormLabel-root": {
      color: "white",
      fontFamily: "Chakra Petch",
    },
    "& label.Mui-focused": {
      color: "#f5af19",
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontFamily: "Chakra Petch",
    },
    "& .MuiInput-underline": {
      "&:before": {
        borderBottomColor: "white",
      },
      "&:hover:before": {
        borderBottomColor: "white",
      },
      "&:after": {
        borderBottomColor: "#f5af19",
      },
    },
  },
})(TextField);

export default GFXField;
