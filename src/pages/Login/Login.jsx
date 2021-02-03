import React, { useContext } from "react";
import FirebaseAuth from "../../context/AuthContext/AuthContext";

import GFXField from "../../components/GFX/GFXField/GFXField";
import GFXButton from "../../components/GFX/GFXButton/GFXButton";
import GFXFlourish from "../../components/GFX/GFXFlourish/GFXFlourish";

import { showErrorOnBlur } from "mui-rff";

import { Form } from "react-final-form";
import { Paper, Grid, Card, CardMedia } from "@material-ui/core";

const Login = (props) => {
  const {
    handleSignin,
    handleSetErrors,
    handleSetProfile,
    handleSetToken,
    errors,
    token,
  } = useContext(FirebaseAuth);

  const onSubmit = async (values) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(300).then(() => {
      console.log(values);
      handleSignin(
        values.email,
        values.pass,
        handleSetErrors,
        handleSetProfile,
        handleSetToken
      );
      console.log(errors, token);
    });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.header = "Provide a valid email.";
    }
    if (!values.password) {
      errors.password = "Provide a valid password";
    }
    return errors;
  };

  const styles = {
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    card: {
      position: "relative",
      margin: "0 20% 0 20%",
    },
    overlay: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50% , -50%)",
      color: "white",
      fontSize: "3rem",
      fontFamily: "Futura",
    },
  };

  const formFields = [
    {
      size: 12,
      field: (
        <GFXField
          label="email"
          name="email"
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
          name="pass"
          type="password"
          margin="none"
          required={true}
          showError={showErrorOnBlur}
        />
      ),
    },
  ];

  return (
    <div>
      <Card style={styles.card}>
        <CardMedia style={styles.media} alt="Sample" title="Cover Image" />
        <div style={styles.overlay}>Add/Edit</div>
      </Card>

      <GFXFlourish />
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
                margin: "0 20% 20% 20%",
                backgroundColor: "#1F1B24",
              }}
            >
              <Grid
                container
                direction="column"
                alignItems="center"
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
                    onClick={() => onSubmit(values)}
                  >
                    Submit
                  </GFXButton>
                </Grid>
              </Grid>
            </Paper>
            <pre>{JSON.stringify(values)}</pre>
            <pre>
              {" "}
              {errors.length > 0
                ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
                : null}
            </pre>
          </form>
        )}
      />
    </div>
  );
};

export default Login;
