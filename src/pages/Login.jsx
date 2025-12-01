import InputField from "../components/InputField";
import "../css/components.css";
import Button from '../components/Button.jsx'; 
import Title from "../components/Title";
import LoginOrRegister from "../components/LoginOrRegister";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";



const Login = () => {
  const navigate = useNavigate();
  const {setAuth }= useContext(AuthContext); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errMsg, setErrMessage] = useState(""); 
  const [success, setSuccess] = useState(false); 
  const [user, setUser] = useState({})
  const [student, setStudent] = useState("")
  const [teacher, setTeacher] = useState("");


  useEffect(()=> {
    setErrMessage(""); 
  }, [username, password])

  const handleFormSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("login/authenticate-user/", {username, password}); 
      const loggedInUser = response.data.user;
      const studentId = response.data.student_id; 
      const teacherId = response.data.teacher_id; 
      const access = response.data.access; 
      const refresh = response.data.refresh; 
      console.log(response.data)

      localStorage.setItem("refreshToken", refresh);

      setUser(loggedInUser);
      setStudent(studentId); 
      setTeacher(teacherId); 
      setAuth({ 
        student_id: studentId, 
        teacher_id: teacherId, 
        access, 
        refresh, 
        user: loggedInUser 
      });
      setPassword("");
      setUsername("");
      setSuccess(true);

      if (loggedInUser.role.toLowerCase() === "student") {
        navigate(`/student/${studentId}`);
      } else if (loggedInUser.role.toLowerCase() === "teacher") {
        navigate(`/admin/${teacherId}`);
      }
        
    } catch (err) {
      console.error(err); 
    }
  }

  return (
    <div className="container">
      <div className="login">
        <div className="logo-div">
          <img src="src/assets/logo.jpg" alt="Logo" />
        </div>
        <div className="input-div">
            <Title title="Login Page"/>
            <p className={errMsg ? "error-message" : "off-screen"} aria-live="assertive">{errMsg}</p>
          <div className="input-section">
            <form onSubmit={handleFormSubmit}>
              <InputField placeholder="Username" value={username} onChange={setUsername} req={true}/>
              <InputField placeholder="Password" type = "password" value={password} onChange={setPassword} req={true}/>
              <Button name="Login" /> 
              <LoginOrRegister mainText= "New to EPA? " anchorText="Register Here" to="/register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
