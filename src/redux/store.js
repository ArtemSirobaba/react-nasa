import { createStore, combineReducers } from "redux";
import reducerRover from "./rover.js";
import reducerCamera from "./camera.js";
import reducerSol from "./sol.js";
import reducerToggle from "./toggle.js";

const allReducers = combineReducers({
  rover: reducerRover,
  camera: reducerCamera,
  sol: reducerSol,
  toggle: reducerToggle,
});

export default createStore(allReducers);
