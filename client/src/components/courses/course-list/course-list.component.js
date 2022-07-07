import React, { useEffect } from "react";

import DeleteButton from "../buttons/delete-button.component";
import EditButton from "../buttons/edit-button.component";

const CourseList = ({ courses }) => {

  return (
    <table className="table table-horizontal mt-4">
      <thead className="table-success">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Slug</th>
          <th scope="col">AuthorID</th>
          <th scope="col">Category</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course._id}>
              <th scope="row">{course.title}</th>
              <td>{course.slug}</td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
              <td>
                <EditButton />
              </td>
              <td>
                <DeleteButton course={course} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CourseList;
