import axios from 'axios';

const API_URL = 'http://localhost:4000';

// Students
export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/students`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};

export const createStudent = async (student) => {
  try {
    const response = await axios.post(`${API_URL}/students`, student);
    return response.data;
  } catch (error) {
    console.error('Error creating student:', error);
    return null;
  }
};

export const updateStudent = async (id, student) => {
  try {
    const response = await axios.put(`${API_URL}/students/${id}`, student);
    return response.data;
  } catch (error) {
    console.error(`Error updating student (ID: ${id}):`, error);
    return null;
  }
};

export const deleteStudent = async (id) => {
  try {
    await axios.delete(`${API_URL}/students/${id}`);
  } catch (error) {
    console.error(`Error deleting student (ID: ${id}):`, error);
  }
};

// Courses
export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};

export const createCourse = async (course) => {
  try {
    const response = await axios.post(`${API_URL}/courses`, course);
    return response.data;
  } catch (error) {
    console.error('Error creating course:', error);
    return null;
  }
};

export const updateCourse = async (id, course) => {
  try {
    const response = await axios.put(`${API_URL}/courses/${id}`, course);
    return response.data;
  } catch (error) {
    console.error(`Error updating course (ID: ${id}):`, error);
    return null;
  }
};

export const deleteCourse = async (id) => {
  try {
    await axios.delete(`${API_URL}/courses/${id}`);
  } catch (error) {
    console.error(`Error deleting course (ID: ${id}):`, error);
  }
};

// Matriculas (StudentCourses)
export const getMatriculas = async () => {
  try {
    const response = await axios.get(`${API_URL}/matriculas`);
    return response.data;
  } catch (error) {
    console.error('Error fetching matriculas:', error);
    return [];
  }
};

export const createMatricula = async (matricula) => {
  try {
    const response = await axios.post(`${API_URL}/matriculas`, matricula);
    return response.data;
  } catch (error) {
    console.error('Error creating matricula:', error);
    return null;
  }
};

export const updateMatricula = async (id, matricula) => {
  try {
    const response = await axios.put(`${API_URL}/matriculas/${id}`, matricula);
    return response.data;
  } catch (error) {
    console.error(`Error updating matricula (ID: ${id}):`, error);
    return null;
  }
};

export const deleteMatricula = async (id) => {
  try {
    await axios.delete(`${API_URL}/matriculas/${id}`);
  } catch (error) {
    console.error(`Error deleting matricula (ID: ${id}):`, error);
}
};
