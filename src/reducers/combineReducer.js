import counterReducer from "./counter";
import LoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counterReducer,
  LoggedReducer,
});

export default allReducer;

//combine all reducers
