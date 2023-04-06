import React, { useState } from "react";
import MatriculaForm from "./MatriculaForm";

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
    <div>
      {isEditing ? (
        <MatriculaForm matricula={matricula} students={students} courses={courses} onSubmit={handleUpdate} />
      ) : (
        <>
          <div>
            {student ? student.name : "Unknown student"} - {course ? course.name : "Unknown course"}
          </div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default MatriculaListItem;
