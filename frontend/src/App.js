import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentList from "./components/Student/StudentList";
import CourseList from "./components/Course/CourseList";
import MatriculaList from "./components/Matricula/MatriculaList";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/matriculas" element={<MatriculaList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
