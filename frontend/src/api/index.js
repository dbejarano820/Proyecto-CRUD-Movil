import axios from "axios";

const API_URL = "http://localhost:4000";

export const getStudents = async () => {
  const response = await axios.get(`${API_URL}/students`);
  return response.data;
};

export const createStudent = async (student) => {
  const response = await axios.post(`${API_URL}/students`, student);
  return response.data;
};

export const updateStudent = async (student) => {
  const response = await axios.put(`${API_URL}/students/${student.id}`, student);
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await axios.delete(`${API_URL}/students/${id}`);
  return response.data;
};

export const getCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data;
};

export const createCourse = async (course) => {
  const response = await axios.post(`${API_URL}/courses`, course);
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(`${API_URL}/courses/${course.id}`, course);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(`${API_URL}/courses/${id}`);
  return response.data;
};

export const getMatriculas = async () => {
  const response = await axios.get(`${API_URL}/student_courses`);
  return response.data;
};

export const createMatricula = async (matricula) => {
  const response = await axios.post(`${API_URL}/student_courses`, matricula);
  return response.data;
};

export const updateMatricula = async (matricula) => {
  const response = await axios.put(`${API_URL}/student_courses/${matricula.id}`, matricula);
  return response.data;
};

export const deleteMatricula = async (id) => {
  const response = await axios.delete(`${API_URL}/student_courses/${id}`);
  return response.data;
};
