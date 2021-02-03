/* actionTypes.js
 * =====
 *
 * Holds all string action types in variables, allowing centralized modification
 * of action types to update the state using reducers.
 *
 * Modify the string to the appropriate action, and all subsequent types will follow.
 *
 */

// boilerplate actions
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// update authentication state
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// save profile data to Auth0 > global state
export const ADD_PROFILE = "ADD_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";

// track changes + submit form input
export const USER_INPUT_CHANGE = "USER_INPUT_CHANGE";
export const USER_INPUT_SUBMIT = "USER_INPUT_SUBMIT";
