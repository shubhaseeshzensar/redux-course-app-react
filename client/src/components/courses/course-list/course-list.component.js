import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOneCourse, loadCourses } from '../../../store/course/course.action';
import { selectCourses } from '../../../store/course/course.selector';
import EditCourse from '../course-edit/course-edit.component';


const CourseList = () => {
	const courses = useSelector(selectCourses);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadCourses());
	}, []);

	const courseDeleteHandler = (id) => {
		if (window.confirm('Are you sure to delete ? ')) {
			dispatch(deleteOneCourse(id));
		}
	};
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
				{courses &&
					courses.map((course) => {
						return (
							<tr key={course._id}>
								<th scope="row">{course.title}</th>
								<td>{course.slug}</td>
								<td>{course.authorId}</td>
								<td>{course.category}</td>
								<td>
									<EditCourse course={course} />
								</td>
								<td>
									<button
										type="button"
										className="btn btn-danger"
										onClick={() => courseDeleteHandler(course._id)}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default CourseList;