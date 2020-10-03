import * as actionTypes from "../actions/actionTypes";

export const initalState = {
  matchs: [],
};

export default function addMatchReducer(state = initalState, action) {
  switch (action.type) {
    case actionTypes.ADD_MATCH:
      break;
    case actionTypes.GET_MATCH_SUCCESS:
      return {
        ...state,
        matchs: state.matchs.concat(action.payload),
      };

    default:
      return state;
  }
}
