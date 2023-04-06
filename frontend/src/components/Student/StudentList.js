import React, { useState, useEffect } from "react";
import api from "../../api";
import StudentListItem from "./StudentListItem";
import StudentForm from "./StudentForm";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get("/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleCreateStudent = async (newStudent) => {
    try {
      const response = await api.post("/students", newStudent);
      setStudents([...students, response.data]);
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  const handleUpdateStudent = async (updatedStudent) => {
    try {
      await api.put(`/students/${updatedStudent.id}`, updatedStudent);
      const updatedStudents = students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      );
      setStudents(updatedStudents);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await api.delete(`/students/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div>
      <h1>Students</h1>
      <StudentForm onSubmit={handleCreateStudent} />
      {students.map((student) => (
        <StudentListItem
          key={student.id}
          student={student}
          onUpdate={handleUpdateStudent}
          onDelete={handleDeleteStudent}
        />
      ))}
    </div>
  );
};

export default StudentList;
