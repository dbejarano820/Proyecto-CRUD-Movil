import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CourseList from "./components/Course/CourseList";
import StudentList from "./components/Student/StudentList";
import MatriculaList from "./components/Matricula/MatriculaList";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/courses">Cursos</Link>
            </li>
            <li>
              <Link to="/students">Estudiantes</Link>
            </li>
            <li>
              <Link to="/matricula">Matricula</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/courses">
            <CourseList />
          </Route>
          <Route path="/students">
            <StudentList />
          </Route>
          <Route path="/matricula">
            <MatriculaList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
