import { combineReducers } from "redux";
import { removeReducer } from "./removeReducer";
import { carReducer } from "./carReducer";

export const connectReducer = combineReducers({
  carReducer,
  removeReducer
});
