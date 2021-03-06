import React from "react";
import { Form } from "react-final-form";

import GFXField from "../GFX/GFXField/GFXField";
import GFXButton from "../GFX/GFXButton/GFXButton";

import { showErrorOnBlur } from "mui-rff";

import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import EntriesContext from "../../context/EntriesContext/EntriesContext";

const useStyles = makeStyles((theme) => ({
  buttonGrid: {
    marginTop: 16,
  },
}));

const OptionsForm = (props) => {
  const cfx = useStyles();

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.color) {
      errors.color = "Provide a valid hex color.";
    }
    if (!values.label) {
      errors.label = "Provide a valid label.";
    }
    return errors;
  };

  const formFields = [
    {
      size: 12,
      field: (
        <GFXField
          label="color"
          name="color"
          margin="none"
          required={true}
          showError={showErrorOnBlur}
        />
      ),
    },
    {
      size: 12,
      field: (
        <GFXField
          label="label"
          name="label"
          margin="none"
          required={true}
          showError={showErrorOnBlur}
        />
      ),
    },
  ];

  return (
    <EntriesContext.Consumer>
      {(context) => (
        <Paper
          elevation={3}
          style={{
            padding: "10rem",
            margin: "25% 20% 20% 20%",
            backgroundColor: "#1a1a1a",
          }}
        >
          <Form
            onSubmit={onSubmit}
            initialValues={{}}
            validate={validate}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  spacing={2}
                >
                  <Grid container alignItems="flex-end" spacing={5}>
                    {formFields.map((item, idx) => (
                      <Grid item xs={item.size} key={idx}>
                        {item.field}
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item style={{ marginTop: 50 }}>
                    <GFXButton
                      type="button"
                      variant="contained"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </GFXButton>
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <GFXButton
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                      onClick={() => context.onSubmit(values)}
                    >
                      Submit
                    </GFXButton>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={5}
                    className={cfx.buttonGrid}
                  >
                    <Grid item xs={6}>
                      <GFXButton
                        variant="contained"
                        color="primary"
                        onClick={context.onErase}
                      >
                        Erase
                      </GFXButton>
                    </Grid>
                    <Grid item xs={6}>
                      <GFXButton
                        variant="contained"
                        color="primary"
                        onClick={context.onClear}
                      >
                        Clear
                      </GFXButton>
                    </Grid>
                    <Grid item xs={6}>
                      <GFXButton
                        variant="contained"
                        color="primary"
                        onClick={() => context.onAdd(0)}
                      >
                        Above
                      </GFXButton>
                    </Grid>
                    <Grid item xs={6}>
                      <GFXButton
                        variant="contained"
                        color="primary"
                        onClick={() => context.onAdd(1)}
                      >
                        Below
                      </GFXButton>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            )}
          />
        </Paper>
      )}
    </EntriesContext.Consumer>
  );
};

export default OptionsForm;
