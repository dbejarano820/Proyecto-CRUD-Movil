import React, { useState } from "react";

const MatriculaForm = ({ matricula, students, courses, onSubmit }) => {
  const [studentId, setStudentId] = useState(matricula?.studentId || "");
  const [courseId, setCourseId] = useState(matricula?.courseId || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: matricula?.id, studentId, courseId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={studentId} onChange={(e) => setStudentId(e.target.value)}>
        <option value="">Select a student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
      <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
        <option value="">Select a course</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MatriculaForm;
