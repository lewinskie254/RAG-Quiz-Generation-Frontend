import './App.css'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminQuizView from './pages/AdminQuizView.jsx'
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminQuizManagementDash from './pages/AdminQuizManagementDash.jsx';
import StudentQuizView from './pages/StudentQuizView.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import Login from './pages/Login.jsx';
import StudentRegister from './pages/StudentRegister.jsx';
import AuthContext from './context/AuthProvider.jsx';
import * as jwt_decode from "jwt-decode";
import { useContext, useState, useEffect } from "react";
import axios from "./api/axios";
import Registration from './pages/Registration.jsx';
import AdminRegister from './pages/AdminRegister.jsx';


function App() {

  const { auth, setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    // 1️⃣ Setup Axios interceptor
    const requestInterceptor = axios.interceptors.request.use(config => {
      if (auth?.access) {
        config.headers["Authorization"] = `Bearer ${auth.access}`;
      }
      return config;
    });

    // 2️⃣ Token check on mount
    const checkToken = () => {
      if (!auth?.access) {
        setLoading(false);
        return;
      }

      try {
        const decoded = jwt_decode.default(auth.access);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          axios.post("/token/refresh/", { refresh: auth.refresh })
            .then(response => {
              setAuth(prev => ({ ...prev, access: response.data.access }));
              setLoading(false);
            })
            .catch(err => {
              console.error(err);
              setAuth({});
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        setAuth({});
        setLoading(false);
      }
    };

    checkToken();

    // Cleanup interceptor
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [auth.access, auth.refresh, setAuth]);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route
        path="/"
        element={
          auth?.access ? (
            <Navigate to={auth.user.role.toLowerCase() === "student" ? `/student/${auth.student_id}` : `/admin/${auth.teacher_id}`} />
          ) : (
            <Login />
          )
        }
      />
      <Route path="/register" element={<Registration/>} />
      <Route path="/register-student" element={<StudentRegister/>} />
      <Route path="/register-teacher" element={<AdminRegister/>} />
      <Route path="/student/:studentId" element={<StudentDashboard/>} />
      <Route path="/admin/:adminId" element={<AdminDashboard/>} />
      <Route path="/admin-quiz/:quizId" element={<AdminQuizView />} />
      <Route path="/admin-quiz-management/:unitId" element={<AdminQuizManagementDash />} />
      <Route path="/student-quiz/:quizId" element={<StudentQuizView />} />
    </Routes>
  )
}

export default App
