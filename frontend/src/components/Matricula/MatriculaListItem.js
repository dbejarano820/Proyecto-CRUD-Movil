import React, { useState } from "react";
import styled from "styled-components";
import MatriculaForm from "./MatriculaForm";

const StyledContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
`

const StyledMiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StyledButtons = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`

const MatriculaListItem = ({ matricula, students, courses, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const student = students.find((s) => s.id === matricula.studentId);
  const course = courses.find((c) => c.id === matricula.courseId);

  const handleUpdate = (updatedMatricula) => {
    setIsEditing(false);
    onUpdate(updatedMatricula);
  };

  const handleDelete = () => {
    onDelete(matricula.id);
  };

  return (
    <StyledContainer>
      {isEditing ? (
        <MatriculaForm matricula={matricula} students={students} courses={courses} onSubmit={handleUpdate} />
      ) : (
        <>
          <StyledMiniContainer>
            <div><b>Curso:</b> {course ? course.name : "Unknown course"}</div>
            <div><b>Estudiante:</b> {student ? student.name : "Unknown student"}</div>
          </StyledMiniContainer>
          <StyledButtons>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </StyledButtons>
        </>
      )}
    </StyledContainer>
  );
};

export default MatriculaListItem;
