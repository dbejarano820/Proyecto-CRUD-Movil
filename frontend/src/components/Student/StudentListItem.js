import React, { useState } from "react";
import StudentForm from "./StudentForm";

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
    <div>
      {isEditing ? (
        <StudentForm student={student} onSubmit={handleUpdate} />
      ) : (
        <>
          <div>{student.name}</div>
          <div>{student.age}</div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default StudentListItem;
