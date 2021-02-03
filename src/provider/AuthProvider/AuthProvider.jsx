import React, { useState, useReducer } from "react";
import FirebaseAuth from "../../context/AuthContext/AuthContext";
import { Auth } from "../../utils/Auth/Auth";

import * as ACTIONS from "../../store/actions/actions/actions";
import { AuthReducer } from "../../store/reducers/authReducer/authReducer";
// import {
//   initialState,
//   FormReducer,
// } from "../../store/reducers/formReducer/formReducer";

const AuthProvider = (props) => {
  const [errors, setErrors] = useState([]);
  const [profile, setProfile] = useState({});
  const [token, setToken] = useState(null);

  // auth Reducer
  const [stateAuth, dispatchAuth] = useReducer(
    AuthReducer.AuthReducer,
    AuthReducer.initialState
  );

  const handleLogin = () => {
    dispatchAuth(ACTIONS.login_success());
  };

  const handleLogout = () => {
    dispatchAuth(ACTIONS.login_failure());
  };

  const handleAddProfile = (profile) => {
    dispatchAuth(ACTIONS.add_profile(profile));
  };

  const handleRemoveProfile = (profile) => {
    dispatchAuth(ACTIONS.remove_profile(profile));
  };

  // useStates
  const handleSetErrors = (err) => {
    setErrors([...errors, err.message]);
  };
  const handleSetToken = (token) => {
    setToken(token);
  };
  const handleSetProfile = (profile) => {
    setProfile({ profile });
  };

  const handleSignup = (
    email,
    password,
    handleSetErrors,
    handleAddProfile,
    handleSetToken
  ) => {
    console.log("Launching handleSignup");
    return Auth.signup(
      email,
      password,
      handleSetErrors,
      handleAddProfile,
      handleSetToken
    );
  };

  const handleSignin = (
    email,
    password,
    handleSetErrors,
    handleAddProfile,
    handleSetToken
  ) => {
    console.log("Launching handleSignup");
    return Auth.signin(
      email,
      password,
      handleSetErrors,
      handleAddProfile,
      handleSetToken
    );
  };

  const handleSignout = (handleSetErrors, handleAddProfile, handleSetToken) => {
    console.log("Launching handleSignout");
    return Auth.signout(handleSetErrors, handleAddProfile, handleSetToken);
  };

  // form Reducer
  // const [stateForm, dispatchForm] = useReducer(
  //   FormReducer.FormReducer,
  //   FormReducer.initialState
  // );

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   event.persist();
  //   dispatchForm(ACTIONS.user_input_submit(event.target.useContext.value));
  // };

  return (
    <FirebaseAuth.Provider
      value={{
        test: "context is working",
        handleSignup,
        handleSignin,
        handleSignout,
        // Form Reducer
        // handleFormChangeState: stateForm.user_textChange,
        // handleFormSubmitState: stateForm.user_textSubmit,
        // handleFormSubmit: (event) => handleFormSubmit(event),

        // Auth Reducer
        // authState: stateAuth.is_authenticated,
        handleUserLogin: () => handleLogin(),
        handleUserLogout: () => handleLogout(),
        handleAddProfile: () => handleAddProfile(),
        handleRemoveProfile: () => handleRemoveProfile(),

        // Auth States
        handleSetToken: (token) => handleSetToken(token),
        handleSetProfile: (profile) => handleSetProfile(profile),
        handleSetErrors: (err) => handleSetErrors(err),

        errors,
        token,
        profile,
      }}
    >
      {props.children}
    </FirebaseAuth.Provider>
  );
};

export default AuthProvider;
