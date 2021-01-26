import React from "react";
import { Form } from "react-final-form";

import GFXField from "../GFXField/GFXField";
import GFXButton from "../GFXButton/GFXButton";

import { showErrorOnBlur } from "mui-rff";

import { Paper, Grid } from "@material-ui/core";

const OptionsForm = (props) => {
  // Async response to Local Storage & Backend
  const onSubmit = async () => {
    await alert("Hello");
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Provide a valid username.";
    }
    if (!values.password) {
      errors.password = "Provide a valid password.";
    }
    return errors;
  };

  const formFields = [
    {
      size: 12,
      field: (
        <GFXField
          label="username"
          name="username"
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
          label="pass"
          name="password"
          type="password"
          margin="none"
          required={true}
        />
      ),
    },
  ];

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      validate={validate}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Paper
            elevation={3}
            style={{
              padding: "10rem",
              margin: "2rem 20% 20% 20%",
              backgroundColor: "#1F1B24",
            }}
          >
            <Grid container direction="column" alignItems="center" spacing={2}>
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
                >
                  Submit
                </GFXButton>
              </Grid>
            </Grid>
          </Paper>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
};

export default OptionsForm;
