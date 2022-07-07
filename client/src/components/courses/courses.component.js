import React, { useEffect, useState } from "react";
import CourseForm from "./course-form/course-form.component";
import CourseList from "./course-list/course-list.component";
import { useSelector } from "react-redux";
import { selectIsCoursesShown } from "../../store/course/course.selector";
import "./courses.styles.css";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/api`).then((res) => {
      setCourses(res.data);
    });
  }, []);
  const isCourseShown = useSelector(selectIsCoursesShown);
  return (
    <div className="courses-container">
      <CourseForm courses={courses} />
      {isCourseShown && <CourseList courses={courses} />}
    </div>
  );
};

export default Courses;
