import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Teacher from './teacher.jsx';
import Student from './student.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;