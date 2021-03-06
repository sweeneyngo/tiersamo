/* authReducer.js
 * =====
 *
 * Holds all state properties and actions
 * for user authentication status and user profile data.
 *
 */

import * as ACTION_TYPES from "../../actions/actionTypes/actionTypes";

export const initialState = {
  is_authenticated: false,
  profile: null,
  token: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        is_authenticated: true,
      };
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        is_authenticated: false,
      };
    case ACTION_TYPES.ADD_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case ACTION_TYPES.REMOVE_PROFILE:
      return {
        ...state,
        profile: null,
      };
    case ACTION_TYPES.ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default: {
      return { ...state };
    }
  }
};
