import { combineReducers } from "redux";
import { courseReducer } from "./course/course.reducer";

export const rootReducer = combineReducers({
  courseReducer,
});
