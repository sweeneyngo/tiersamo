/* actions.js
 * =====
 *
 * Holds all actions used for updating state via reducers.
 *
 * Modify the function name as appropriate, but refrain from changing the type.
 *
 */

import * as ACTION_TYPES from "../actionTypes/actionTypes";

export const SUCCESS = { type: ACTION_TYPES.SUCCESS };
export const FAILURE = { type: ACTION_TYPES.FAILURE };

export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS,
  };
};

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE,
  };
};

export const login_success = () => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
  };
};

export const login_failure = () => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE,
  };
};

export const add_profile = (profile) => {
  return {
    type: ACTION_TYPES.ADD_PROFILE,
    payload: profile,
  };
};

export const remove_profile = () => {
  return {
    type: ACTION_TYPES.REMOVE_PROFILE,
  };
};

export const add_errors = (errors) => {
  return {
    type: ACTION_TYPES.ADD_ERRORS,
  };
};
export const add_token = (token) => {
  return {
    type: ACTION_TYPES.ADD_TOKEN,
  };
};

export const user_input_change = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT_CHANGE,
    payload: text,
  };
};

export const user_input_submit = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT_SUBMIT,
    payload: text,
  };
};
