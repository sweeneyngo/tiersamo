/* boilerReducer.js
 * =====
 *
 * Boilerplate reducer for new reducer creation.
 *
 */
import * as ACTION_TYPES from "../../actions/actionTypes/actionTypes";

export const initialState = {
  stateA: false,
  stateB: false,
};

export const boilerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        stateA: true,
        stateB: true,
      };
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateA: false,
        stateB: false,
      };
    default:
      throw new Error();
  }
};
