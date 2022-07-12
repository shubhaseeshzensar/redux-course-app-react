import React from "react";
import "./course-edit.styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateOneCourse } from "../../../store/course/course.action";

const EditCourse = ({ course }) => {
  const { _id } = course;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [userInput, setUserInput] = useState(course);
  const { title, slug, authorId, category } = userInput;
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...course, [name]: value });
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const editSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(updateOneCourse(_id, userInput));
    setIsEditing(false);
  };
  return (
    <div>
      {!isEditing ? (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => editHandler(course)}
        >
          Edit
        </button>
      ) : (
        <form onSubmit={editSubmitHandler} className="update-form-container">
          <div className="update-control">
            <label>Course Title</label>
            <input
              value={title}
              name="title"
              type="text"
              onChange={inputChangeHandler}
              required="required"
            />
          </div>
          <div className="update-control">
            <label>Slug</label>
            <input
              type="text"
              name="slug"
              value={slug}
              required="required"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="update-control">
            <label>Course Author ID</label>
            <input
              required="required"
              name="authorId"
              type="text"
              value={authorId}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="update-control">
            <label>Course Category</label>
            <input
              required="required"
              name="category"
              type="text"
              value={category}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="action">
            <button type="submit" className="update-button">
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditCourse;
