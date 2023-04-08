import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getStudents, createStudent, updateStudent, deleteStudent } from "../../api";
import StudentListItem from "./StudentListItem";
import StudentForm from "./StudentForm";
import TabMenu from "../TabMenu";

const StyledContainer = styled.div`
  width: 100%
  padding: 15px;
  background-color: #fff;
`;

const StyledHeader = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  text-decoration: underline;
`;

const StyledSubheader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

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
    <StyledContainer>
      <TabMenu />
      <StyledHeader>Students</StyledHeader>
      <StyledSubheader>Agregue un estudiante nuevo:</StyledSubheader>
      <StudentForm onSubmit={handleCreateStudent} />
      {students.map((student) => (
        <StudentListItem
          key={student.id}
          student={student}
          onUpdate={handleUpdateStudent}
          onDelete={handleDeleteStudent}
        />
      ))}
    </StyledContainer>
  );
};

export default StudentList;
