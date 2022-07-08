import React from "react";
import CourseForm from "./course-form/course-form.component";
import CourseList from "./course-list/course-list.component";
import "./courses.styles.css";

const Courses = () => {
  return (
    <div className="courses-container">
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default Courses;
