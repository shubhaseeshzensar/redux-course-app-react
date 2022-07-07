import React from "react";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../../store/course/course.action";

const DeleteButton = ({ course }) => {
  const { _id } = course;
  const dispatch = useDispatch();
  const courseDeleteHandler = async() => {
    dispatch(deleteCourse(_id));
  };
  return (
    <button
      type="button"
      className="btn btn-info"
      onClick={courseDeleteHandler}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
