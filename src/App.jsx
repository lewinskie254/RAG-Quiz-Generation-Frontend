import './App.css'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminQuizView from './pages/AdminQuizView.jsx'
import { Routes, Route } from 'react-router-dom';
import AdminQuizManagementDash from './pages/AdminQuizManagementDash.jsx';
import StudentQuizView from './pages/StudentQuizView.jsx';


function App() {

  return (
    <Routes>
      <Route path="/" element={<AdminDashboard/>} />
      <Route path="/admin-quiz/:quizId" element={<AdminQuizView />} />
      <Route path="/admin-quiz-management/:unitId" element={<AdminQuizManagementDash />} />
      <Route path="/student-quiz" element={<StudentQuizView />} />
    </Routes>
  )
}

export default App
