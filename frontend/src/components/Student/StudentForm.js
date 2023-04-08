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

const StyledInput = styled.input`
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

const StudentForm = ({ student, onSubmit }) => {
  const [name, setName] = useState(student?.name || "");
  const [age, setAge] = useState(student?.age || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: student?.id, name, age: Number(age) });
    setName('');
    setAge('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StyledInput
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default StudentForm;
