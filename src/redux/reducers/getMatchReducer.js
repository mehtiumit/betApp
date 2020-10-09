import * as actionTypes from "../actions/actionTypes";

export const initalState = {
  matchs: [],
};

export default function addMatchReducer(state = initalState, action) {
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
    default:
      return state;
  }
}
