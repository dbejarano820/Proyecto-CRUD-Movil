import React, { useState, useEffect } from "react";
import { getStudents, createStudent, updateStudent, deleteStudent } from "../../api";
import StudentListItem from "./StudentListItem";
import StudentForm from "./StudentForm";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleCreateStudent = async (student) => {
    const newStudent = await createStudent(student);
    setStudents([...students, newStudent]);
  };

  const handleUpdateStudent = async (updatedStudent) => {
    await updateStudent(updatedStudent);
    setStudents(students.map((student) => (student.id === updatedStudent.id ? updatedStudent : student)));
  };

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    setStudents(students.filter((student) => student.id !== id));
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
