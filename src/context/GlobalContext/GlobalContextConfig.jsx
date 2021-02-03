import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import * as ACTIONS from "../../store/actions/actions/actions";

import * as boilerReducer from "../../store/reducers/boilerReducer/boilerReducer";
import * as AuthReducer from "../../store/reducers/authReducer/authReducer";
import * as FormReducer from "../../store/reducers/formReducer/formReducer";

import Routes from "../../components/Routes/Routes";

import Auth from "../../utils/Auth/Auth";

const auth = new Auth();

const GlobalContextConfig = () => {
  // boilerplate Reducer
  const [state, dispatch] = useReducer(
    boilerReducer.boilerReducer,
    boilerReducer.initialState
  );

  const handleDispatchTrue = () => {
    dispatch(ACTIONS.success());
  };

  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure());
  };

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

  const handleRemoveProfile = () => {
    dispatchAuth(ACTIONS.remove_profile());
  };

  // form Reducer
  const [stateForm, dispatchForm] = useReducer(
    FormReducer.FormReducer,
    FormReducer.initialState
  );

  const handleFormChange = (event) => {
    dispatchForm(ACTIONS.user_input_change(event.target.value));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.persist();
    dispatchForm(ACTIONS.user_input_submit(event.target.useContext.value));
  };

  //Handle authentication from callback
  const handleAuthentication = (props) => {
    if (props.location.hash) {
      auth.handleAuth();
    }
  };

  return (
    <div>
      <GlobalContext.Provider
        value={{
          //Reducer1
          stateProp1: state.stateA,
          stateProp2: state.stateB,
          dispatchContextTrue: () => handleDispatchTrue(),
          dispatchContextFalse: () => handleDispatchFalse(),

          //Form Reducer
          useContextChangeState: stateForm.user_textChange,
          useContextSubmitState: stateForm.user_textSubmit,
          useContextSubmit: (event) => handleFormSubmit(event),
          useContextChange: (event) => handleFormChange(event),

          //Auth Reducer
          authState: stateAuth.is_authenticated,
          profileState: stateAuth.profile,
          handleUserLogin: () => handleLogin(),
          handleUserLogout: () => handleLogout(),
          handleUserAddProfile: (profile) => handleAddProfile(profile),
          handleUserRemoveProfile: () => handleRemoveProfile(),

          //Handle auth
          handleAuth: (props) => handleAuthentication(props),
          authObj: auth,
        }}
      >
        <Routes />
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalContextConfig;
