import React, { useState } from "react";
import styled from "styled-components";
import StudentForm from "./StudentForm";

const StyledContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
`;

const StyledMiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledButtons = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`;

const StudentListItem = ({ student, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedStudent) => {
    setIsEditing(false);
    onUpdate(updatedStudent);
  };

  const handleDelete = () => {
    onDelete(student.id);
  };

  return (
    <StyledContainer>
      {isEditing ? (
        <StudentForm student={student} onSubmit={handleUpdate} />
      ) : (
        <>
          <StyledMiniContainer>
            <div>
              <b>Name:</b> {student.name}
            </div>
            <div>
              <b>Age:</b> {student.age}
            </div>
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

export default StudentListItem;
