import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;

const StyledSelect = styled.select`
  border: 1px solid #000;
  border-radius: 4px;
  width: 100%;
`;

const StyledButton = styled.button`
  border: 1px solid #000;
  border-radius: 4px;
  width: 50%;
  height: 30px;
`

const MatriculaForm = ({ matricula, students, courses, onSubmit }) => {
  const [studentId, setStudentId] = useState(matricula?.studentId || "");
  const [courseId, setCourseId] = useState(matricula?.courseId || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: matricula?.id, studentId, courseId });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledSelect value={studentId} onChange={(e) => setStudentId(e.target.value)}>
        <option value="">Select a student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </StyledSelect>
      <StyledSelect value={courseId} onChange={(e) => setCourseId(e.target.value)}>
        <option value="">Select a course</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </StyledSelect>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default MatriculaForm;
