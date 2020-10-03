import * as actionTypes from "../actions/actionTypes";

const initialState = {
  postData: {},
};

export default function addMatchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_MATCH:
      return {
        ...state,
        postData: action.payload,
      };

    default:
      return state;
  }
}
