import { combineReducers } from "redux";
import todoReducer from "./toDoReducer";

const rootReducers = combineReducers({
  todoReducer,
});
export default rootReducers;
