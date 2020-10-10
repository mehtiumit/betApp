import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios";
import { store } from "react-notifications-component";

const notificationInfo = (
  notificationTitle,
  notificationMessage,
  noitificationType
) =>
  store.addNotification({
    title: `${notificationTitle}`,
    message: `${notificationMessage}`,
    type: `${noitificationType}`,
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });

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

export function deleteMatchSuccess(matchId) {
  return { type: actionTypes.DELETE_MATCH_SUCCESS, payload: matchId };
}

export function getMatchByIdSuccess(match) {
  return { type: actionTypes.GET_MATCH_BY_ID, payload: match };
}

export function getMatchs() {
  return async (dispatch) => {
    return await axios.get("/getBet").then((res) => {
      console.log("Actiondan gelen Data");
      console.log(res.data);
      dispatch(getMatchSuccess(res.data));
    });
  };
}

export function getMatchById(matchId) {
  return async (dispatch) => {
    return await axios.get(`/getBetById/${matchId}`).then((res) => {
      console.log("Single Match", res.data);
      dispatch(getMatchByIdSuccess(res.data));
    });
  };
}

export function postMatchSuccess(postData) {
  return async (dispatch) => {
    await axios.post("/postBet", postData).then((data) => {
      dispatch(addMatchSuccess(data));
      notificationInfo(
        "Success",
        "Match successfuly added to your coupon",
        "success"
      );
    });
  };
}
export function deleteMatchs(matchId) {
  return async (dispatch) => {
    await axios.delete(`/deleteBet/${matchId}`).then((data) => {
      dispatch(deleteMatchSuccess(data));
      notificationInfo("Info", "Match deleted successfuly", "info");
    });
  };
}
