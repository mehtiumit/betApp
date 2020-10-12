import * as actionTypes from "../actions/actionTypes";

export const initalState = {
  matchs: [],
  singleMatch: [],
};

export default function getMatchReducer(state = initalState, action) {
  switch (action.type) {
    case actionTypes.GET_MATCH_SUCCESS:
      return {
        ...state,
        matchs: action.payload,
      };
    case actionTypes.DELETE_MATCH_SUCCESS:
      return {
        ...state,
        matchs: state.matchs.filter((matchId) => matchId._id !== action._id),
      };
    case actionTypes.GET_MATCH_BY_ID:
      return {
        ...state,
        singleMatch: action.payload,
      };
    case actionTypes.UPDATE_MATCH:
      console.log("Action.payload", action.payload);
      return {
        ...state,
        matchs: state.matchs.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    default:
      return state;
  }
}
