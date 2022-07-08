import { COURSE_ACTION_TYPES } from "./course.type";
import { createAction } from "../../utils/reducer-utils";
import { addCourse, deleteCourse, getCourse } from "../api";

const getAll = (courseArray) =>
  createAction(COURSE_ACTION_TYPES.GET_ALL_COURSE, courseArray);

const deleteOne = () => createAction(COURSE_ACTION_TYPES.DELETE_COURSE);

const addOne = () => createAction(COURSE_ACTION_TYPES.GET_ALL_COURSE);

export const loadCourses = () => {
  return (dispatch) => {
    const resp = getCourse();
    resp
      .then(function (response) {
        // console.log(response);
        dispatch(getAll(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const addOneCourse = (courseToAdd) => {
  return (dispatch) => {
    const resp = addCourse(courseToAdd);
    resp
      .then(function (response) {
        // console.log(response);
        dispatch(addOne());
        dispatch(loadCourses());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const deleteOneCourse = (id) => {
  return (dispatch) => {
    const resp = deleteCourse(id);
    resp
      .then(function (response) {
        // console.log(response);
        dispatch(deleteOne());
        dispatch(loadCourses());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
