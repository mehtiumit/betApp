import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios";
export function getMatchs() {
  return async (dispatch) => {
    return await axios.get("/getBet").then((res) => {
      console.log("Actiondan gelen Data");
      console.log(res.data);
      dispatch(getMatchSuccess(res.data));
    });
  };
}

export function addMatch(match) {
  return { type: actionTypes.ADD_MATCH, payload: match };
}
export function deleteMatch(match) {
  return { type: actionTypes.DELETE_MATCH, payload: match };
}

export function getMatchSuccess(matchs) {
  return { type: actionTypes.GET_MATCH_SUCCESS, payload: matchs };
}

export function addMatchSuccess(match) {
  return { type: actionTypes.ADD_MATCH, payload: match };
}

export function addMatches(match) {
  return (dispatch) => {
    return axios
      .post("/postBet", match)
      .then((res) => dispatch(addMatchSuccess(res.data)));
  };
}
