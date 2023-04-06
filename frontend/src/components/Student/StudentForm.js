import React, { useState } from "react";

const StudentForm = ({ student, onSubmit }) => {
  const [name, setName] = useState(student?.name || "");
  const [age, setAge] = useState(student?.age || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: student?.id, name, age: Number(age) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
