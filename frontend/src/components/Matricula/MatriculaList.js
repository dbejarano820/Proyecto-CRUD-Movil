import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getMatriculas, createMatricula, updateMatricula, deleteMatricula, getStudents, getCourses } from "../../api";
import MatriculaListItem from "./MatriculaListItem";
import MatriculaForm from "./MatriculaForm";

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

const MatriculaList = () => {
  const [matriculas, setMatriculas] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchMatriculas();
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchMatriculas = async () => {
    const data = await getMatriculas();
    setMatriculas(data);
  };

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  const handleCreate = async (matricula) => {
    try {
      const newMatricula = await createMatricula(matricula);
  
      if (newMatricula) {
        setMatriculas([...matriculas, newMatricula]);
      } else {
        alert("Una matricula con el mismo estudiante y cursos ya existe.");
      }
    } catch (error) {
      console.error("Error creating matricula:", error);
      alert("An error occurred while creating the matricula.");
    }
  };
  const handleUpdate = async (updatedMatricula) => {
    await updateMatricula(updatedMatricula);
    setMatriculas(matriculas.map((matricula) => (matricula.id === updatedMatricula.id ? updatedMatricula : matricula)));
  };

  const handleDelete = async (id) => {
    await deleteMatricula(id);
    setMatriculas(matriculas.filter((matricula) => matricula.id !== id));
  };

  return (
    <StyledContainer>
      <StyledHeader>Matriculas</StyledHeader>
      <StyledSubheader>Realice una matricula:</StyledSubheader>
      <MatriculaForm students={students} courses={courses} onSubmit={handleCreate} />
      {matriculas.map((matricula) => (
        <MatriculaListItem
          key={matricula.id}
          matricula={matricula}
          students={students}
          courses={courses}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </StyledContainer>
 );
};

export default MatriculaList;