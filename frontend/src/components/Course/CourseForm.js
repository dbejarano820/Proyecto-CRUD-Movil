import React, { useState } from "react";
import styled from 'styled-components';

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

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 4px;
  width: 100%;
`;

const StyledTextArea = styled.textarea`
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

const CourseForm = ({ course, onSubmit }) => {
  const [name, setName] = useState(course?.name || "");
  const [description, setDescription] = useState(course?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: course?.id, name, description });
    setName('');
    setDescription('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StyledTextArea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></StyledTextArea>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default CourseForm;
