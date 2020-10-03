import { combineReducers } from "redux";
import getMatchReducer from "./getMatchReducer";
import addMatchReducer from "./addMatchReducer";


const rootReducer = combineReducers({
  getMatchReducer,
  addMatchReducer,
});
export default rootReducer;
