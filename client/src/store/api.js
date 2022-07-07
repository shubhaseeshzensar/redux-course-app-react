import axios from "axios";

export const addNewCourse = (course) =>
  axios
    .post("http://localhost:5000/api/create", course)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

export const deleteOneCourse = async (id) =>
  await axios.delete(`http://localhost:5000/api/delete/${id}`);

export const updateCourse = (id, course) => {
  return axios.put(`http://localhost:5000/api/update/${id}`, course);
};
