import React from "react";
import "./course-form.styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOneCourse } from "../../../store/course/course.action";

const CourseForm = () => {
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({
    enteredcourseTitle: "",
    enteredSlug: "",
    enteredcourseAuthorId: "",
    enteredcourseCategory: "",
  });

  const courseTitleHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredcourseTitle: event.target.value };
    });
  };
  const courseSlugHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredSlug: event.target.value };
    });
  };

  const courseAuthorIdHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredcourseAuthorId: event.target.value };
    });
  };

  const courseCategoryHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredcourseCategory: event.target.value };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const courseToAdd = {
      title: userInput.enteredcourseTitle,
      slug: userInput.enteredSlug,
      authorId: userInput.enteredcourseAuthorId,
      category: userInput.enteredcourseCategory,
    };

    dispatch(addOneCourse(courseToAdd));

    setUserInput(() => {
      return {
        enteredcourseTitle: "",
        enteredSlug: "",
        enteredcourseAuthorId: "",
        enteredcourseCategory: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form-container">
      <div className="control">
        <label>Course Title</label>
        <input
          value={userInput.enteredcourseTitle}
          type="text"
          onChange={courseTitleHandler}
          required="required"
        />
      </div>
      <div className="control">
        <label>Slug</label>
        <input
          type="text"
          value={userInput.enteredSlug}
          required="required"
          onChange={courseSlugHandler}
        />
      </div>
      <div className="control">
        <label>Course Author ID</label>
        <input
          required="required"
          type="text"
          value={userInput.enteredcourseAuthorId}
          onChange={courseAuthorIdHandler}
        />
      </div>
      <div className="control">
        <label>Course Category</label>
        <input
          required="required"
          type="text"
          value={userInput.enteredcourseCategory}
          onChange={courseCategoryHandler}
        />
      </div>
      <div className="action">
        <button type="submit" className="button">
          Add New Course
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
