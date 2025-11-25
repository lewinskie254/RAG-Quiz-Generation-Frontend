import './App.css'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminQuizView from './pages/AdminQuizView.jsx'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/admin-quiz/:quizId" element={<AdminQuizView />} />
    </Routes>
  )
}

export default App
