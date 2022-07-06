import { COURSE_ACTION_TYPES } from "./course.type";
import { createAction } from "../../utils/reducer-utils";
import { addNewCourse,  } from "../api";

export const setCourse = (courseToAdd) => () => {
  const newCourses = addNewCourse(courseToAdd)
  createAction(COURSE_ACTION_TYPES.SET_COURSE, newCourses);
};

export const setIsCoursesShown = (boolean) =>
  createAction(COURSE_ACTION_TYPES.SET_IS_COURSE_SHOWN, boolean);

