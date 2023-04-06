import React, { useState } from "react";

const CourseForm = ({ course, onSubmit }) => {
  const [name, setName] = useState(course?.name || "");
  const [description, setDescription] = useState(course?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: course?.id, name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CourseForm;
