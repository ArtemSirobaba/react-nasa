import { createStore, combineReducers } from "redux";
import {
  reducerRover,
  reducerCamera,
  reducerSol,
  reducerToggle,
} from "./reducer.js";

const allReducers = combineReducers({
  rover: reducerRover,
  camera: reducerCamera,
  sol: reducerSol,
  toggle: reducerToggle,
});

export default createStore(allReducers);
