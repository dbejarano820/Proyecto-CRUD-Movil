import React, { useState } from "react";
import CourseForm from "./CourseForm";

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
    <div>
      {isEditing ? (
        <CourseForm course={course} onSubmit={handleUpdate} />
      ) : (
        <>
          <div>
            Name: {course.name} - Description: {course.description}
          </div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default CourseListItem;
