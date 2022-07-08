import axios from "axios";

export const getCourse = async () =>
  await axios.get(`http://localhost:5000/api`);

export const addCourse = async (course) =>
  await axios.post("http://localhost:5000/api/create", course);

export const deleteCourse = (id) =>
  axios.delete(`http://localhost:5000/api/delete/${id}`);

export const updateCourse = (id, course) => {
  return axios.put(`http://localhost:5000/api/update/${id}`, course);
};
