import { createSelector } from "reselect";

const selectCourseReducer = (state) => state.courseReducer;

export const selectCourses = createSelector(
  [selectCourseReducer],
  (course) => course.courses
);
