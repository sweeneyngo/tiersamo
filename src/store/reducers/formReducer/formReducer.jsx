/* formReducer.js
 * =====
 *
 * Tracks changes to input element
 * and submission for form state data to global state.alert
 *
 */

import * as ACTION_TYPES from "../../actions/actionTypes/actionTypes";

export const initialState = {
  user_textChange: "",
  user_textSubmit: "",
};

export const FormReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_INPUT_CHANGE:
      return {
        ...state,
        user_textChange: action.payload,
      };
    case ACTION_TYPES.USER_INPUT_SUBMIT:
      return {
        ...state,
        user_textSubmit: action.payload,
      };
    default:
      throw new Error();
  }
};
