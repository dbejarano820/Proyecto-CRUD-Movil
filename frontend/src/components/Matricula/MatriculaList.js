import React, { useState, useEffect } from "react";
import { getMatriculas, createMatricula, updateMatricula, deleteMatricula, getStudents, getCourses } from "../../api";
import MatriculaListItem from "./MatriculaListItem";
import MatriculaForm from "./MatriculaForm";

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
    const newMatricula = await createMatricula(matricula);
    setMatriculas([...matriculas, newMatricula]);
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
    <div>
      <h2>Matriculas</h2>
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
    </div>
 );
};

export default MatriculaList;