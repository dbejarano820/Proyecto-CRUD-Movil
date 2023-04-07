import React, { useState, useEffect } from "react";
import { getCourses, createCourse, updateCourse, deleteCourse } from "../../api";
import CourseListItem from "./CourseListItem";
import CourseForm from "./CourseForm";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  const handleCreate = async (course) => {
    const newCourse = await createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const handleUpdate = async (updatedCourse) => {
    await updateCourse(updatedCourse);
    setCourses(courses.map((course) => (course.id === updatedCourse.id ? updatedCourse : course)));
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div>
      <h2>Courses</h2>
      <CourseForm onSubmit={handleCreate} />
      {courses.map((course) => (
        <CourseListItem key={course.id} course={course} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default CourseList;
