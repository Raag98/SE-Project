import { Routes, Route } from "react-router";
import './App.css';
import Homepage from './components/Homepage';
import TeacherLogin from "./components/TeacherLogin";
import StudentLogin from "./components/StudentLogin";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
