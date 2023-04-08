import React, { useState } from "react";
import styled from "styled-components";
import CourseForm from "./CourseForm";

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

const CourseListItem = ({ course, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedCourse) => {
    setIsEditing(false);
    onUpdate(updatedCourse);
  };

  const handleDelete = () => {
    onDelete(course.id);
  };

  return (
    <StyledContainer>
      {isEditing ? (
        <CourseForm course={course} onSubmit={handleUpdate} />
      ) : (
        <>
          <StyledMiniContainer>
            <div>
              <b>Name:</b> {course.name}
            </div>
            <div>
              <b>Description:</b> {course.description}
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

export default CourseListItem;
