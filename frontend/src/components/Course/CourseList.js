import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { getCourses, createCourse, updateCourse, deleteCourse } from "../../api";
import CourseListItem from "./CourseListItem";
import CourseForm from "./CourseForm";
import TabMenu from "../TabMenu";

const StyledContainer = styled.div`
  width: 100%
  padding: 15px;
  background-color: #fff;
`;

const StyledHeader = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  text-decoration: underline;
`;

const StyledSubheader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

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
    <StyledContainer>
      <TabMenu />
      <StyledHeader>Courses</StyledHeader>
      <StyledSubheader>Agregue un curso nuevo:</StyledSubheader>
      <CourseForm onSubmit={handleCreate} />
      {courses.map((course) => (
        <CourseListItem key={course.id} course={course} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
    </StyledContainer>
  );
};

export default CourseList;
